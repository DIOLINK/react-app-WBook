import React, {Component} from 'react';

import Default_book from '../images/default_book.svg';

class Book extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div id="book" >
                <Booklets />
                <Booklets />
                <Booklets />
                <Booklets />
            </div>
        )
    }
}

class Booklets extends Component {
    render(){
        return(
                <div id="booklets" >
                    <div id="imgBook" >
                        <div id="imgBookIn" >
                            <img src={Default_book} height="69px" width="69px" />
                        </div>
                    </div>

                    <div id="title" >
                        <label id="lbTitle" >Título</label>
                    </div>
                    
                    <div id="author" >
                        <label id="lbAuthor" >Autor</label>
                    </div>
                </div>
        )
    }
}

export default Book;