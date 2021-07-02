import React from 'react';
import './home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from "./Search";

function Home() {
    return (
        //BEM
        <div className="home">
            <div className="home_head">
                <div className="home_headRight">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headLeft">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>
            <div className="home_body">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt =""/>
                <div className="inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Home;