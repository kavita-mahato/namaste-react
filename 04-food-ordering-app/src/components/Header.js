import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Sign In");
    console.log("Header Render");

    useEffect(() => {
        console.log("useEffect called");
    }, [btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
                <h1>FOODIE</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>Help</li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button className="signin" onClick={() => {
                        btnName === "Sign In"
                        ? setBtnName("Sign Out")
                        : setBtnName("Sign In");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;