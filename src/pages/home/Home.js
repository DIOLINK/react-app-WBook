import React, {Component} from 'react';

import Head from './header/layout';
import SearchBar from './header/layout';
import Books from './book/loyout';

import books from '../../dummyData/books';

class Home extends Component {
    render(){
        return(
         <div id="home" >
             {/* <Head /> */}
             <SearchBar />
             <Books books={books} />
         </div>   
        )
    }
}

export default Home;