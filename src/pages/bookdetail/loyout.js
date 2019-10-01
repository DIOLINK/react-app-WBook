import React, {Component} from 'react';

import Book from '../home/book/loyout';

class Detail extends Component{
    render(){
        return(
            <div id="detail" >
                <Book bookDetail={false} />
            </div>
        )
    }
}

export default Detail;