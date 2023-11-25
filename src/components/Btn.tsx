import React, { MouseEventHandler } from "react";
import "../assets/css/Btn.css";

type BtnProps = {
  content: string;
  style?: object;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const Btn = (props: BtnProps): React.ReactElement => {
  return (
    <a
      className="btn"
      href={props.href}
      onClick={props.onClick}
      style={props.style}
    >
      {props.content}
    </a>
  );
};

export default Btn;
