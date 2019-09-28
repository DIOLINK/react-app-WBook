import React, {Component} from 'react';

import Head from './pages/header/layout';
import SearchBar from './pages/searchbar/layout';
import Books from './pages/book/loyout';

class App extends Component {
    render(){
        return(
         <div id="App" >
             <Head />
             
             <SearchBar />
            
         </div>   
        )
    }
}


export default App;