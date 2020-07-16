import React from "react";

const langContext = React.createContext({
  languige: "",
  changeLanguigeHandler: () => {},
});

export default langContext;
