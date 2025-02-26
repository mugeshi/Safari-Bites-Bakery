import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faUtensils, faShoppingCart, 
  faClipboardList, faInfoCircle, faPhone, 
  faUser, faSearch, faBars 
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Bakery Logo" className="logo" />

      {/* Menu Items */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faUtensils} /> Products</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faClipboardList} /> Orders</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInfoCircle} /> About</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPhone} /> Contact</a></li>
      </ul>

      {/* Right Section: Search, Cart, User */}
      <div className="right-section">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />

        {/* Mobile Menu Button */}
        <FontAwesomeIcon 
          icon={faBars} 
          className="menu-icon" 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>
    </nav>
  );
}

export default Navbar;
