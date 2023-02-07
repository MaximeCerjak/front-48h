import React, { useState } from "react";
import { Link } from "react-router-dom";
import cadi from "../../public/cadi.png";
import logo from "../../public/logo.png";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
 
    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div>
            <header className="header">
                <div className="header-top">
                    <div className="header-left">
                        <Link to="/"> <img className="logo3" src={logo} alt=""/> </Link>
                    </div>
                    <div className="header-center">
                        <input type="text" placeholder="Search" className="search-bar"/>
                    </div>
                    <div className="header-right">
                        <button className="button-SignIn"><Link className="button-SignIn1" to="/signin">Sign in</Link></button> 
                        <button className="button-SignUp"><Link className="button-SignUp1" to="/Connect/">Sign Up</Link></button>
                    </div>
                </div>
                <div className="header-bottom">
                    <button className="burger-menu-btn" onClick={handleMenu}>Menu</button>
                    <nav>
                        <ul className="navbar">
                            <Link to="/"><li>Home</li></Link>
                        </ul>
                    </nav>
                    <button className="card-btn" onClick={() => setIsOpen(true)}>
                        <img className="cadi" src={cadi} alt=""/>
                    </button>
                </div>
            </header>
            <div className={ menu ? "side-menu active" : "side-menu"}>
                <ul className="side-menu-list">
                </ul>
            </div>
            <div className={ isOpen ? "side-card active" : "side-card" }>
                <button onClick={() => setIsOpen(false)}>Fermer</button>
                <h2>Panier</h2>
                {/* <h3>Total : { * cart}€</h3> */}
            </div>
        </div>
    );
};

export default Header;