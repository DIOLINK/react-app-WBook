import React, {Component} from 'react';

import Wbooks_logo from '../home/images/wbooks_logo.svg';

class Login extends Component {
    render(){
        return(
            <div id="login" >
            
                <div id="log" >
                    <img src={Wbooks_logo} width="324px" height="75px" />
                </div>
                <div id="boton" >
                    <input type="button" value="Ingresar con Google" id="button" />
                </div>
            
            </div>
        )
    }
}

export default Login;