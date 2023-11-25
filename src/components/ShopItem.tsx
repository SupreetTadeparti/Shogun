import React, { useState } from "react";
import redStar from "../assets/img/redstar.png";
import Btn from "../components/Btn";
import "../assets/css/ShopItem.css";

type ShopItemProps = {
  id: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  inCart: boolean;
  cartCallback: React.MouseEventHandler | undefined;
};

const ShopItem = (props: ShopItemProps): React.ReactElement => {
  const [itemInCart, setItemInCart] = useState(props.inCart);

  return (
    <div className="shop__item">
      <div className="shop__item__left">
        <img
          src="//unsplash.it/640/320"
          alt="lorem"
          className="shop__item__thumbnail"
        />
      </div>
      <div className="shop__item__right">
        <div className="shop__item__name">{props.name}</div>
        <div className="shop__item__review">
          {Array(2 + Math.floor(Math.random() * 3))
            .fill(0)
            .map((_, idx) => (
              <img key={idx} src={redStar} alt="star" width="20" />
            ))}{" "}
          {Math.floor(Math.random() * 200)} Reviews
        </div>
        <div className="shop__item__price">
          <sup>₹</sup>
          {props.newPrice}
          {/* TODO: Display Old Price */}
        </div>
        <Btn
          content={itemInCart ? "Remove from Cart" : "Add to Cart"}
          onClick={(e) => {
            setItemInCart(!itemInCart);
            if (props.cartCallback) props.cartCallback(e);
          }}
          style={
            itemInCart
              ? ({
                  backgroundColor: "hsl(var(--accent-clr))",
                  "--text-clr": "white",
                  "--text-clr-hover": "",
                } as React.CSSProperties)
              : {}
          }
        />
      </div>
    </div>
  );
};

export type { ShopItemProps };
export default ShopItem;
