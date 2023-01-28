import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';

const Header  = () =>(
        <div className="header">
            <div className="logo">
                <h3>logo</h3>
            </div>

            <div className="options">
                <nav>
                    <ul>
                        <NavLink activeClass = 'active' to='/'>Home</NavLink>
                        <NavLink  activeClass = 'active' to='/collections'>Products</NavLink>
                        <NavLink  activeClass = 'active' to='/favorite'>favorite</NavLink>
                        <NavLink  activeClass = 'active' to='/signin'>Sign in</NavLink>
                        <NavLink  activeClass = 'active'><i class="fa-solid fa-cart-shopping"></i></NavLink>
                    </ul>
                </nav>
            </div>
        </div>  
);

export default Header;