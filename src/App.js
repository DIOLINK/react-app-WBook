import React, { Component } from "react";

import Home from "./pages/home/Home";
//import Login from './pages/login/loyout';
// import BookDetail from './pages/bookdetail/BookDetail';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Home />
        {/* <Login /> */}
        {/* <BookDetail /> */}
      </div>
    );
  }
}

export default App;
