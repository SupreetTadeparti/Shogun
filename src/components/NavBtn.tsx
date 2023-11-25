import React from "react";

type NavBtnProps = {
  content: string;
};

const NavBtn = (props: NavBtnProps): React.ReactElement => {
  return (
    <li>
      <a className="nav__link btn" href="#">
        {props.content}
      </a>
    </li>
  );
};

export default NavBtn;
