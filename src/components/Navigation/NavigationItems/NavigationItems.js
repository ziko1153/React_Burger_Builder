import React from "react";
import classes from "./Navigationitems.module.css";
import NavList from "./NavList/NavList";
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavList link="/" active>
      Burger Builder{" "}
    </NavList>
    <NavList link="/">Checkout</NavList>
  </ul>
);

export default navigationItems;
