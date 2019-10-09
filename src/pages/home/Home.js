import React, {Component} from 'react';

import Headr from '../home/header/layout';
import SearchBar from '../home/searchbar/layout';

// import Books from './book/loyout';
    import books from '../../dummyData/books';

class Home extends Component {
    render(){
        return(
         <div id="home" >
             <Headr />
             <SearchBar books={books} />
             {/* <div id="book"><Books books={books} /></div> */}
         </div>   
        )
    }
}

export default Home;
