import React from "react";
import "../assets/css/NavLink.css";

type NavLinkProps = {
  content: string | React.ReactElement;
  href: string;
};

const NavLink = (props: NavLinkProps): React.ReactElement => {
  return (
    <li>
      <a className="nav__link" href={props.href}>
        {props.content}
      </a>
    </li>
  );
};

export default NavLink;
