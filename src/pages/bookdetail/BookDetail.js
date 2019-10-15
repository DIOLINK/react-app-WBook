import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "../home/header/layout";
import Detail from "./loyout";

import books from "../../dummyData/books";

import "../bookdetail/Bookdetail.css";

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      history,
      match: { params }
    } = this.props;
    const volver = "<volver";
    return (
      <div id="contentBookDetail">
        <Header />
        <div id="volver" onClick={() => history.push('/')}>{volver}</div>
        <div id="BookDetail">
          <Detail
            book={books.find(book => book.id == params.id)}
            bookDetail={false}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(BookDetail);
