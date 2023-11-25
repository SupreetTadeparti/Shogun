import React, { useEffect, useState } from "react";
import "../assets/css/CartRoute.css";
import CartItem, { CartItemProps } from "../components/CartItem";
import Btn from "../components/Btn";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CartRoute = (): React.ReactElement => {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [cartItems, setCartItems] = useState<Array<CartItemProps>>([]);

  const navigate = useNavigate();

  const initCartItems = async (user: any) => {
    if (!user) {
      navigate("/");
      return;
    }

    try {
      const userDocRef = doc(db, "users", user.uid);

      // Get the user's document data
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        // Retrieve the 'cart' field from the user's document
        const cart = userDocSnap.data()?.cart || [];

        let oldPrice = 0;
        let newPrice = 0;

        const cartItemsData = await Promise.all(
          cart.map(async (cartItemRef: any) => {
            const cartItemDocSnap = await getDoc(cartItemRef);
            const cartItemData = cartItemDocSnap.data() as CartItemProps;
            oldPrice += cartItemData.oldPrice;
            newPrice += cartItemData.newPrice;
            return { ...cartItemData, id: cartItemDocSnap.id };
          })
        );

        setOriginalPrice(oldPrice);
        setFinalPrice(newPrice);
        setCartItems(cartItemsData);
      } else {
        console.error("User document does not exist.");
        navigate("/");
      }
    } catch (error: any) {
      console.error("Error initializing cart items:", error.message);
    }
  };

  const removeFromCart = async (itemId: string): Promise<void> => {
    try {
      // Get the currently authenticated user
      const user = auth.currentUser;

      if (user) {
        // Reference to the user's document in the 'users' collection
        const userDocRef = doc(db, "users", user.uid);
        const shopItemRef = doc(db, "courses", itemId);

        // Remove the item from the 'cart' field using arrayRemove
        await updateDoc(userDocRef, { cart: arrayRemove(shopItemRef) });

        await initCartItems(user);

        console.log("Item removed from the cart:", shopItemRef);
      } else {
        console.error(
          "User not authenticated. Unable to remove item from cart."
        );
      }
    } catch (error: any) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      initCartItems(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component unmounts
    };
  }, []);

  return (
    <div className="cart-route-container">
      <div className="page-heading">My Cart</div>
      <div className="cart-main">
        <div className="cart__items">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <CartItem
                key={idx}
                id={item.id}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                deleteCallback={() => removeFromCart(item.id)}
                thumbnail="//unsplash.it/640/320"
              />
            ))
          ) : (
            <div className="empty-cart">No Items in Cart (✖╭╮✖)</div>
          )}
        </div>
        <div className="cart__billing">
          <div className="cart__billing__heading">Order Summary</div>
          <div className="cart__billing__item">
            <div className="billing-item__name">Original Price</div>
            <div className="billing-item__value">₹{originalPrice}</div>
          </div>
          <div className="cart__billing__item">
            <div className="billing-item__name">Discounts</div>
            <div className="billing-item__value">
              ₹{finalPrice - originalPrice}
            </div>
          </div>
          <hr />
          <div className="cart__billing__item final">
            <div className="billing-item__name">Final Price</div>
            <div className="billing-item__value">₹{finalPrice}</div>
          </div>
          <Btn content="Proceed to Checkout" style={{ margin: "auto" }} />
        </div>
      </div>
    </div>
  );
};

export default CartRoute;
