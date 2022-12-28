import React from "react"

import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
