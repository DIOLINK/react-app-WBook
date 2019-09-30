import React, {Componet} from 'react';

import Head from './header/layout';
import BookDetail from './loyout';

class BookDetail extends Componet {

    render(){
        return(
            <Head />
            <BookDetail />
        )
    }
}

export default BookDetail;