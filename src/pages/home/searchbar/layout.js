import React, { Component } from "react";

import Search from "../../images/search.svg";

import "../searchbar/Searchbar.css";

import Books from "../book/loyout";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", value: "" };
    this.searchText = this.searchText.bind(this);
    this.submit = this.submit.bind(this);
  }

  searchText(e) {
    this.setState({ text: e.target.text, value: e.target.value });
  }

  submit(e) {
    return console.log(this.state.text + " " + this.state.value);
  }

  render() {
    const IMG_BOOK_ICON = "24px";

    return (
      <div id="saerch">
        <div id="saerch1">
          <select ref="filtro" id="filtro" onChange={this.searchText} this>
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
        <div id="book">
          <Books books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
