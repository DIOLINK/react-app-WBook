import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from './pages/login/loyout';
import BookDetail from './pages/bookdetail/BookDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="//" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/bookdetail" component={BookDetail} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
