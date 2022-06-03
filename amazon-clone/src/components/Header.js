import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

function Header() {
  
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
        <Link to='/'>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        /> 
        </Link>
        <div className="header_search">
            <input type="text" className="header_search_input"/>
            <SearchIcon className="header_search_icon"/>
        </div>
        <div className="header_nav">
            <div className="header_nav_options">
                <span className="header_nav_option1">Hello Guest</span>
                <span className="header_nav_option2">Sign In</span>
            </div>
            <div className="header_nav_options">
                <span className="header_nav_option1">Return</span>
                <span className="header_nav_option2">& Orders</span>
            </div>
            <div className="header_nav_options">
                <span className="header_nav_option1">Your</span>
                <span className="header_nav_option2">Prime</span>
            </div>
            <Link to='/checkout'>
            <div className="header_nav_cart">
                <ShoppingCartIcon className="cart_icon"/>
                <span className="header_nav_options2 header_nav_cart_number">{basket?.length}</span>
            </div>
            </Link>
        </div>
      </div>
    
  );
}

export default Header;
