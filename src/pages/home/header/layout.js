import React, {Component} from 'react';

import Wbooks_logo from '../../images/wbooks_logo.svg';
import Notifications  from '../../images/notifications.svg';
import Add_book  from '../../images/add_book.svg';
import pupy from '../../../dummyData/CAT_2,2.svg';

import './Header.css';

class Header extends Component {
    render(){
        return(
                <div id="head" >
                      <div id="head1">
                           <img src={Wbooks_logo} width="183px" height="42px" />
                      </div>
                      <div id="head2">
                           <img src={Notifications} width="30px" height="30px" />
                           <img src={Add_book} width="28px" height="30px" />
                           <img src={pupy} width="40px" height="40px" id="profileImage" />
                      </div>
                 </div>
            
        )
    }
}

export default Header;