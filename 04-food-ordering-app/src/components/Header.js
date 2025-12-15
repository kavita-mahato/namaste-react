import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState("Sign In");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <button className="signin" onClick={() => {
                        btnName === "Sign In"
                        ? setBtnName("Sign Out")
                        : setBtnName("Sign In");
                    }}>{btnName}</button>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;