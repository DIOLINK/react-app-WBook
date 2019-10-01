import React, {Component} from 'react';


import Default_book from '../../images/default_book.svg';

import './Book.css';

class Book extends Component {
    constructor(){
        super();
    }
    render(){
        console.log(this.props.books);
        
       const bookT = (this.props.bookDetail!=false)? this.props.books.map((book) => <Booklets title={book.title} author={book.author} image_url={book.image_url} />) : <BookDetail />

        return(
            <div id="book" >
                {
                    bookT
                }
            </div>
        )
    }
}

class BookDetail extends Component{
    render(){
        return(
            <div id="bookdetail" >
                <p>puus</p>
                <p>hola entro en BookDetail jejeej</p>
            </div>
        )
    }
}

class Booklets extends Component {
    render(){
        const img = (this.props.image_url != null)? <img src={this.props.image_url } height="182px" width="128px" /> : <img src={Default_book} height="69px" width="69px" />;
        return(
                <div id="booklets" >
                    <div id="imgBook" >
                        <div id="imgBookIn" >
                            {img}
                        </div>
                    </div>
                    <div id="title" >
                        <label id="lbTitle" >{this.props.title}</label>
                    </div>
                    <div id="author" >
                        <label id="lbAuthor" >{this.props.author}</label>
                    </div>
                </div>
        )
    }
}

export default Book;