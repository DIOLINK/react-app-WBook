import React, { Component } from "react";

import Search from "../../images/search.svg";

import "../searchbar/Searchbar.css";

import Books from "../book/loyout";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", value: "", filterbooks: [] };
    this.searchText = this.searchText.bind(this);
    this.searchSelect = this.searchSelect.bind(this);
    this.submit = this.submit.bind(this);
  }

  searchText(e) {
    this.setState({ text: e.target.value });
  }

  searchSelect(e) {
    this.setState({ value: e.target.value });
  }

  submit(e) {
    if (this.state.value === "title") {
      let filterbooks = this.props.books.filter(book => book.title === this.state.text);
      this.setState({ filterbooks: filterbooks });
    } else if (this.state.value === "author") {
      let filterbooks = this.props.books.filter();
      this.setState({ filterbooks: filterbooks });
    }
  }

  render() {
    const IMG_BOOK_ICON = "24px";

    return (
      <div id="saerch">
        <div id="contSaerch">
          <div id="filter">
            <select
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
          <Books books={this.state.filterbooks} />
        </div>
      </div>
    );
  }
}


export default SearchBar;
