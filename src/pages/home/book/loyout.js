import React, { Component } from "react";

import Default_book from "../../images/default_book.svg";

import "./Book.css";

class Book extends Component {
  render() {
    const bookT =
      this.props.bookDetail != false ? (
        this.props.books.map(book => (
          <Booklets
            title={book.title}
            author={book.author}
            image_url={book.image_url}
          />
        ))
      ) : (
        <div id="bookRental">
          <BookDetail
            title={this.props.book.title}
            author={this.props.book.author}
            image_url={this.props.book.image_url}
            genre={this.props.book.genre}
            year={this.props.book.year}
            comments="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      );

    return bookT;
  }
}

class BookDetail extends Component {
  render() {
    const img =
      this.props.image_url != null ? (
        <img src={this.props.image_url} height="272px" width="191px" />
      ) : (
        <img src={Default_book} height="39px" width="39px" />
      );
    return (
      <div id="imgBookRental">
        <div id="imgBookInRental">{img}</div>
        <div id="titleRental">
          <label id="lbTitle">{this.props.title}</label>
          <div id="authorRental">
            <label id="lbAuthorRental">{this.props.author}</label>
          </div>
          <div id="yearbook">
            <label id="year">{this.props.year}</label>
          </div>
          <div id="thematicBook">
            <label id="lbThematic">{this.props.genre}</label>
          </div>
          <div id="commentsbook">{this.props.comments}</div>
        </div>
        <div id="rentBook">
          <input type="Button" value="Alquilar" id="rent" />
        </div>
      </div>
    );
  }
}

class Booklets extends Component {
  render() {
    const img =
      this.props.image_url != null ? (
        <img src={this.props.image_url} height="182px" width="128px" />
      ) : (
        <img src={Default_book} height="69px" width="69px" />
      );

    return (
      <div id="booklets">
        <div id="imgBook">
          <div id="imgBookIn">{img}</div>
        </div>
        <div id="title">
          <label id="lbTitle">{this.props.title}</label>
        </div>
        <div id="author">
          <label id="lbAuthor">{this.props.author}</label>
        </div>
      </div>
    );
  }
}

export default Book;
