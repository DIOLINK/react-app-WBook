import React, {Component} from 'react';

import Search from '../images/search.svg';

class SearchBar extends Component {
    render(){
        return(
            <div id="saerch">
              <div id="search1" >
                    <select ref="filtro" id="filtro" >
                        <option value="none">Seleccionar filtro</option>
                        <option value="nombre">Nombre</option>
                        <option value="autor">Autor</option>
                    </select>
              </div>
               <div id="search2" >
                    <input type="text" value="Buscar.." ref="buscar" id="txtbuscar" />
                        <div id="imgSearch">
                            <img src={Search} width="24px" height="24px"  />
                        </div>
               </div>
            </div>
        )
    }
}

export default SearchBar;