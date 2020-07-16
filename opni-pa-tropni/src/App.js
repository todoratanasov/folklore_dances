import React, { Component } from "react";
import "./App.css";
import { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import LangContext from "./context/lang-context";

class App extends Component {
  state = {
    languige: "bulgarian",
  };

  changeLanguigeHandler = (languige) => {};

  render() {
    return (
      <div className="App">
        <LangContext.Provider value={this.state.languige}>
          <Layout></Layout>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
