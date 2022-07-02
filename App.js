import React from "react";
import "./App.css";
import Bottom from "./components/Bottom";
import Top from "./components/Top";

function App() {
  return (
    <div className="container">
      <h1>최상단</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
