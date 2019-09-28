import React, {Component} from 'react';

import Head from './pages/header/layout';
import SearchBar from './pages/searchbar/layout';
import Books from './pages/book/loyout';

class App extends Component {
    render(){
        return(
         <div id="App" >
             <div id="Header" >
                <Head />
             </div>
             <div id="SearchBar" >
                <SearchBar />
             </div>
             <div id="Books" >
                 <Books />
             </div>
         </div>   
        )
    }
}


export default App;