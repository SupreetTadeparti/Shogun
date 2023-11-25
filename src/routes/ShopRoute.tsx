import React, { useEffect, useState } from "react";
import {
  updateDoc,
  arrayUnion,
  doc,
  collection,
  getDocs,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import "../assets/css/ShopRoute.css";
import ShopItem, { ShopItemProps } from "../components/ShopItem";

const PAGE_LENGTH = 10;

const ShopRoute = (): React.ReactElement => {
  const [startIdx, setStartIdx] = useState<number>(0);
  const [shopItems, setShopItems] = useState<Array<ShopItemProps>>([]);

  const addToCart = async (itemId: string): Promise<void> => {
    try {
      // Get the currently authenticated user
      const user = auth.currentUser;

      if (user) {
        // Reference to the user's document in the 'users' collection
        const userDocRef = doc(db, "users", user.uid);
        const shopItemRef = doc(db, "courses", itemId);

        // Add the item to the 'cart' field using arrayUnion
        await updateDoc(userDocRef, { cart: arrayUnion(shopItemRef) });

        console.log("Item added to the cart:", shopItemRef);
      } else {
        console.error("User not authenticated. Unable to add item to cart.");
      }
    } catch (error: any) {
      console.error("Error adding item to cart:", error.message);
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

  const cartCallback = (item: ShopItemProps) => {
    if (item.inCart) removeFromCart(item.id);
    else addToCart(item.id);

    for (const shopItem of shopItems) {
      if (shopItem.id === item.id) {
        shopItem.inCart = !shopItem.inCart;
      }
    }
  };

  const inCart = async (itemId: string): Promise<boolean> => {
    const user = auth.currentUser;

    if (!user) return false;

    const userDocRef = doc(db, "users", user.uid);
    const shopItemRef = doc(db, "courses", itemId);

    try {
      // Get the user's document data
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        // Check if the 'cart' field contains the shop item reference
        const cart = userDocSnap.data()?.cart || [];

        return cart.some((item: any) => item.id === shopItemRef.id);
      } else {
        console.error("User document does not exist.");
        return false;
      }
    } catch (error: any) {
      console.error("Error checking if item is in cart:", error.message);
      return false;
    }
  };

  const initShopItems = async () => {
    const coursesCollection = collection(db, "courses");
    const querySnapshot = await getDocs(coursesCollection);

    const coursesData = (await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        return { ...doc.data(), inCart: await inCart(doc.id), id: doc.id };
      })
    )) as Array<ShopItemProps>;

    setShopItems(coursesData);
  };

  useEffect(() => {
    initShopItems();
  }, []);

  return (
    <div className="shop-route-container">
      <div className="page-heading">Shop Here</div>
      <div className="shop">
        {shopItems.slice(startIdx, startIdx + PAGE_LENGTH).map((item, idx) => (
          <ShopItem
            {...item}
            cartCallback={() => cartCallback(item)}
            key={idx}
          />
        ))}
      </div>
      <div className="shop-nav">
        {Array(Math.ceil(shopItems.length / PAGE_LENGTH))
          .fill(0)
          .map((_, idx) => (
            <div
              className="shop-nav__page-btn"
              key={idx}
              onClick={() => setStartIdx(idx * PAGE_LENGTH)}
            >
              {idx + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopRoute;
