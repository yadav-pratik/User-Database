import React from "react"

import NavBar from "./components/NavBar";
import Body from "./components/Body";

const App = (props) => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
