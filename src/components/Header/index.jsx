import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div>
            <header className="header">
                <div className="header-top">
                    <div className="header-left">
                        <Link to="/">48h Challenge</Link>
                    </div>
                    <div className="header-center">
                        <input type="text" placeholder="Search" className="search-bar"/>
                    </div>
                    <div className="header-right">
                        <Link to="/signin">Signin</Link>
                        <button className="bg-b">Sign up</button>
                    </div>
                </div>
                <div className="header-bottom">
                    <button className="burger-menu-btn" onClick={handleMenu}>Menu</button>
                    <nav>
                        <ul className="navbar">
                            <Link to="/"><li>Home</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={ menu ? "side-menu active" : "side-menu"}>
                <ul className="side-menu-list">
                </ul>
            </div>
        </div>
    );
};

export default Header;