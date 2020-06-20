import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
const Layout = props => (
  <>
    <Toolbar />
    <main className={classes.Container}>{props.children}</main>
  </>
);

export default Layout;
