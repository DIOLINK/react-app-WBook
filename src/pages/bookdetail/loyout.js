import React, { Component } from "react";

import Book from "../home/book/loyout";

class Detail extends Component {
  render() {
    console.log(this.props.book);

    return (
      <div id="detail">
        <Book bookDetail={this.props.bookDetail} book={this.props.book} />
      </div>
    );
  }
}

export default Detail;
