import React from "react";
import Foodusimg from "../Assets/Foodus.png"


const title = (
    <a href="/">
        <img className="logo" src={Foodusimg} alt="Food" />
    </a>
);

const Header = () => {
    return (
        <>
            <div className="header">
                {title}
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;