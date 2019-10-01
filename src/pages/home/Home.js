import React, {Component} from 'react';



import Headr from '../home/header/layout';
import SearchBar from '../home/searchbar/layout';

import Books from './book/loyout';
    import books from '../../dummyData/books';

class Home extends Component {
    render(){
        return(
         <div id="home" >
             <Headr />
             <SearchBar />
             <Books books={books} />
         </div>   
        )
    }
}

export default Home;