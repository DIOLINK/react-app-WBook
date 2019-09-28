import React, {Component} from 'react';

import Head from './header/layout';
import SearchBar from './searchbar/layout';
import Books from './book/loyout';

class Home extends Component {
    render(){
        return(
         <div id="home" >
             <Head />
             <SearchBar />
             <Books />
         </div>   
        )
    }
}

export default Home;