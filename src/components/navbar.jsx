// import React, { Component } from 'react';

import React from "react";
import { Link, NavLink } from "react-router-dom";

//Stateless Functional Component
const NavBar = ({totalCounters, user}) => {
// const NavBar = (props) => {
    console.log('NavBar - Rendered');
    return (
        // <nav className="navbar navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">
        //             Navbar{" "}
        //             <span className="badge rounded-pill bg-secondary">
        //                 {totalCounters}
        //             </span>
        //         </a>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                vidly{" "}
                <span className="badge rounded-pill bg-secondary">
                    {totalCounters}
                </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                </li>
                {!user && (<React.Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </React.Fragment>)}
                {user && (<React.Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">{user.name}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </React.Fragment>)}
                </ul>
            </div>
            </div>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
//         return (
//          <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                     Navbar{" "}
//                     <span className="badge rounded-pill bg-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </div>
//          </nav>
//         );
//     }
// }

export default NavBar;