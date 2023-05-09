import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";

// LEVEL2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">News Scraper</Link>
        </h1>
        {/* <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button> */}
        <i
          className="fas fa-sun"
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
        ></i>{" "}
        <i
          className="fas fa-moon"
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
        ></i>
        <ul className="flex">
          {/* <li className="main-list">
              <NavLink className="main-link" to="/singup">
                Sing Up
              </NavLink>
            </li>
      
            <li
        

            
          
                
            
              className="main-list"
            >
              <NavLink className="main-link">Sing Out</NavLink>
            </li>
   */}

          <li className="main-list">
            <NavLink className="main-link" to="/sport">
              Sports
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/cultural">
              Cultural
            </NavLink>
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/politician">
              Politician
            </NavLink>
          </li>
        
          {!isLoggedIn && (
            <React.Fragment>
              <li className="main-list" >
                <NavLink className="main-link" to="/singin">
                  Sign in
                </NavLink>
              </li>
              <li className="main-list">
                <NavLink className="main-link" to="/singup">
                  Sign up
                </NavLink>
              </li>
            </React.Fragment>
          )}
      
          {!isLoggedIn && (
            <React.Fragment>
              <li className="main-list">
                <NavLink className="main-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="main-list">
                <NavLink
                  className="main-link"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  Log out
                </NavLink>
              </li>
            </React.Fragment>
          )}
      
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
