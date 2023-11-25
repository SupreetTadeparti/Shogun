import React from "react";
import "../assets/css/CartItem.css";
import Btn from "./Btn";

type CartItemProps = {
  id: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  thumbnail: string;
  deleteCallback: React.MouseEventHandler;
};

const CartItem = (props: CartItemProps): React.ReactElement => {
  return (
    <div className="cart-item">
      <img className="cart-item__thumbnail" src={props.thumbnail} alt="image" />
      <div className="cart-item__details">
        <div className="cart-item__name">{props.name}</div>
        <div className="cart-item__price">
          <div className="cart-item__price__new">
            <sup>₹</sup>
            {props.newPrice}
          </div>
          <div className="cart-item__price__old">
            <sup>₹</sup>
            {props.oldPrice}
          </div>
        </div>
        <Btn content="Delete" onClick={props.deleteCallback} />
      </div>
    </div>
  );
};

export type { CartItemProps };
export default CartItem;
