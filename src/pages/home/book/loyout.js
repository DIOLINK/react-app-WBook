import React, {Component} from 'react';


import Default_book from '../../images/default_book.svg';

class Book extends Component {
    constructor(){
        super();
    }
    render(){
        console.log(this.props.books);
        
        return(
            <div id="book" >
                {
                    this.props.books.map((book) => <Booklets title={book.title} author={book.author} image_url={book.image_url} />)
                }
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