import React, { Component } from "react";

import Header from "../home/header/layout";
import Detail from "./loyout";

import books from "../../dummyData/books";

import "../bookdetail/Bookdetail.css";

class BookDetail extends Component {
  render() {
    return (
      <div id="contentBookDetail">
        <Header />
        <div id="BookDetail">
          <Detail book={books[books.length - 1]} bookDetail={false} />
        </div>
      </div>
    );
  }
}

export default BookDetail;
