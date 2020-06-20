import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../components/Logo/Logo";
import Navigation from "../Navigation/NavigationItems/NavigationItems";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <Navigation />
    </nav>
  </header>
);

export default toolbar;
