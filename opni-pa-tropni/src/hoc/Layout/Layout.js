import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar languige={this.props.languige} />
        <main>{this.props.children}</main>;
      </Auxiliary>
    );
  }
}

export default Layout;
