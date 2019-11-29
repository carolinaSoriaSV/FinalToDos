import React, { Component } from "react";
import Home from "./Components/Home";
// import DeletedTasks from "./Components/DeletedTasks";
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   Redirect,
//   Router,
//   Link
// } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
