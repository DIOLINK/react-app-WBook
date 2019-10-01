import React, {Component} from 'react';

import Header from '../home/header/layout';
import Detail from './loyout';

class BookDetail extends Component {
    render(){
        return(
            <div id="bookDetail" >
                <Header />
                <Detail />
            </div>
        )
    }
}

export default BookDetail;