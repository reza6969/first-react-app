// import React, { Component } from 'react';
import { Component } from 'react';
// import { logout } from "../services/authService";
import auth from "../services/authService";

class Logout extends Component {
    // state = {  } 
    componentDidMount() {
        // localStorage.removeItem('token');
        // logout();
        auth.logout();

        window.location = '/';
    }

    render() {
        return null;
    }
}
 
export default Logout;