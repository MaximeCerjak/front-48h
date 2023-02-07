import React, { useState } from "react";


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
                        <h1>48H</h1>
                    </div>
                    <div className="header-center">
                        <input type="text" placeholder="Search" className="search-bar"/>
                    </div>
                    <div className="header-right">
                        <button className="bg-b">Sign in</button>
                        <button className="bg-b">Sign up</button>
                    </div>
                </div>
                <div className="header-bottom">
                    <button className="burger-menu-btn" onClick={handleMenu}>Menu</button>
                    <nav>
                        <ul className="navbar">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={ menu ? "side-menu active" : "side-menu"}>
                <ul className="side-menu-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;