import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Header() {
  return (
    <div id="header">
      <img src="/Images/logo.png" className="logo" alt="" />

      <div className="search_bar">
        <form>
          <SearchIcon className="search_icon" />
          <input type="text" placeholder="Search Products" id="search_item" />
        </form>
      </div>

      <div>
        <ul id="navbar">
          <li>
            <button className="login btn_login_popup" id="login">Login</button>
          </li>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Shop</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>
              <ShoppingBagOutlinedIcon className="shopping_bag" />
            </span>
          </li>
          <span id="close"><CloseOutlinedIcon/></span>
        </ul>
      </div>

      <div id="mobile">
        <MenuOpenOutlinedIcon className="bar" />
      </div>
    </div>
  );
}

export default Header;
