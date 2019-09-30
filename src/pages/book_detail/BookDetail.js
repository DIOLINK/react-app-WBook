import React, {Componet} from 'react';

import Head from './header/layout';
import Detail from './loyout';

class BookDetail extends Componet {

    render(){
        return(
            <Head />
            <Detail />
        )
    }
}

export default BookDetail;