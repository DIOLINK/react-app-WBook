import React, {Component} from 'react';

import Head from './pages/home/header/layout';
import SearchBar from './pages/home/searchbar/layout';
import Books from './pages/home/book/loyout';

class App extends Component {
    render(){
        return(
         <div id="App" >
             <Head />

             <SearchBar />


                <Books />
                <Books />
                <Books />
                <Books />

            
         </div>   
        )
    }
}


export default App;