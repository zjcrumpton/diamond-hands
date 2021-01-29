import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tickers from "./components/Tickers";

function App() {
  return (
    <div className="App">
      <p></p>
      <Tickers />
    </div>
  );
}

export default App;
