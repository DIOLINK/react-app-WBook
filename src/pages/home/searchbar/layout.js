import React, { Component } from "react";

import Search from "../../images/search.svg";

import "../searchbar/Searchbar.css";

import Books from "../book/loyout";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", bookF: [] };
    this.searchText = this.searchText.bind(this);
    this.searchSelect = this.searchSelect.bind(this);
    this.submit = this.submit.bind(this);
  }

  searchText(e) {
    this.setState({ title: e.target.value });
  }

  searchSelect(e) {
    this.setState({ author: e.target.value });
  }

  submit(e) {
    if (this.state.author == "title") {
      this.setState({
        bookF: this.props.books.filter(book =>
          book.title.toLowerCase().includes(this.state.title.toLowerCase())
        )
      });
    } else if (this.state.author == "author") {
      this.setState({
        bookF: this.props.books.filter(book =>
          book.author.toLowerCase().includes(this.state.title.toLowerCase())
        )
      });
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({ bookF: this.props.books });
  }

  render() {
    const IMG_BOOK_ICON = "24px";

    return (
      <div id="saerch">
        <div id="contSaerch">
          <div id="saerch1">
            <select
              ref="filtro"
              id="filtro"
              onChange={this.searchSelect}
              value={this.state.value}
            >
              <option value="none">Seleccionar filtro</option>
              <option value="title">Nombre</option>
              <option value="author">Autor</option>
            </select>
          </div>
          <div id="search2">
            <input
              id="txtbuscar"
              onChange={this.searchText}
              value={this.state.text}
            />
            <div id="imgSearch">
              <img
                src={Search}
                width={IMG_BOOK_ICON}
                height={IMG_BOOK_ICON}
                onClick={this.submit}
              />
            </div>
          </div>
        </div>
        <div id="book">
          <Books books={this.state.bookF} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
