import React, {Component} from 'react';

import Search from '../../images/search.svg';

import '../searchbar/Searchbar.css';

import Books from '../book/loyout';


class SearchBar extends Component {
    render(){
        return(
            <div id="saerch">
                        <div id="contSaerch" >
                            <div id="saerch1" >
                                <select ref="filtro" id="filtro" >
                                    <option value="none">Seleccionar filtro</option>
                                    <option value="nombre">Nombre</option>
                                    <option value="autor">Autor</option>
                                </select>
                            </div>
                    
                            <div id="search2" >
                                <input type="text" value="Buscar..." ref="buscar" id="txtbuscar" />
                                    <div id="imgSearch">
                                        <img src={Search} width="24px" height="24px"  />
                                    </div>
                            </div>
                        </div>
                        <div id="book">
                            <Books books={this.props.books} />
                        </div>
            </div>
        )
    }
}

const SearchBook = (props) => console.log(props.SearchBook.search);


export default SearchBar;