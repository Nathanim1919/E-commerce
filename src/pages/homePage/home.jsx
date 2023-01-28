import React from "react";
import DATA from "../../components/datas";
import { NavLink, Outlet } from "react-router-dom";
import './home.css';

const Home = () =>(
    <>
        <div className="homePage" style={{
        backgroundImage: `linear-gradient(to bottom right,rgba(0,0,0,.7),rgba(0,0,0,.1)),url(${DATA[5].items[2].imageUrl})`,
    }}>
            <div className="heroContent">
                <h1>Every purchase <br/>Will be made<br/>with pleasure.</h1>
                <p>We work with global brands and have created an application for you to do your shopping</p>
                <NavLink to='/signin'>Get started</NavLink>
            </div>
    </div>
    <Outlet/>
    </>
    
);

export default Home;

