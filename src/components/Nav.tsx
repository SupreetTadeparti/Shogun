import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Btn from "./Btn";
import "../assets/css/Nav.css";
import logo from "../assets/img/logo.png";
import cartImg from "../assets/img/cart.svg";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Nav = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user !== null);
    });

    return () => {
      // Unsubscribe to avoid memory leaks
      unsubscribe();
    };
  }, []);

  return (
    <nav className={menuOpen ? "menu-open" : ""}>
      <a href="/">
        <img src={logo} alt="" height="100" />
      </a>
      <div className="menu-btn" onClick={toggleMenu}>
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
      </div>
      <ul className="nav__links">
        <NavLink href="#" content="About" />
        <NavLink href="/bmi" content="BMI" />
        <NavLink href="/shop" content="Shop" />
        <NavLink href="#" content="Contact" />
        {isLoggedIn ? (
          <NavLink href="/account" content="Account" />
        ) : (
          <Btn href="/auth" content="Sign Up" />
        )}
        <NavLink
          href="/cart"
          content={<img src={cartImg} alt="cart" width="30" />}
        />
      </ul>
    </nav>
  );
};

export default Nav;
