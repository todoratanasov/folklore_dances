import React from "react";
import { NavLink } from "react-router-dom";
import navigationItems from "../NavigationItems";
const navigationItem = (props) => {
  <li>
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>;
};

export default navigationItems;
