import React, {Component} from 'react';

import Wbooks_logo from '../images/wbooks_logo.svg';

import './Login.css';

class Login extends Component {
    render(){
        return(
            <div id="login" >
                <div id="log" >
                    <img src={Wbooks_logo} width="324px" height="75px" />
                </div>
                <div id="but" >
                    <input type="button" value="INGRESAR CON GOOGLE" id="button" />
                </div>
            </div>
        )
    }
}

export default Login;