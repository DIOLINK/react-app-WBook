import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/loyout";
import BookDetail from "./pages/bookdetail/BookDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/book/:id" component={BookDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
