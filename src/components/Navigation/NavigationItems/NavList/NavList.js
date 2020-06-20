import React from "react";
import classes from "./NavList.module.css";

const NavList = props => (
  <li className={classes.NavList}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default NavList;
