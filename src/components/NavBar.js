import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import './NavBar.css';
import logo from "../bp.png";

import image from "../cityscape.jpg";
import { findAllByTitle } from "@testing-library/react";

export default function NavBar() {
  return (
    <header className="navbar pin">
      <div className="container mx-auto flex">
        <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white text-4xl font-bold title"
          >
            <img alt="logo" className="logo"/>
            <div className="text">
            Brandon Papin
            <div className="inflex-flex items-center text-sm font-bold title2">Web Developer Student</div>
            </div>
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="green-text"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-white nav-hover"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="green-text"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-white nav-hover"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="green-text"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-white nav-hover"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <div className="tooltip">
                <span className="tooltiptext">LinkedIn</span>
                <SocialIcon
                    url="https://www.linkedin.com/in/brandon-papin-43035517b/"
                    classname="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    bgColor="#51af7f"
                    style={{ height: 35, width: 35}}
                />
            </div>
            <div className="tooltip">
                <span className="tooltiptext">GitHub</span>
                <SocialIcon
                    url="https://github.com/bpapin19"
                    classname="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    bgColor="#51af7f"
                    style={{ height: 35, width: 35 }}
                />
            </div>
        <div className="tooltip">
            <span className="tooltiptext">YouTube</span>
            <SocialIcon
                url="https://www.youtube.com/channel/UCjZoqyUwmK7mCnN24L26ftw"
                classname="mr-4"
                target="_blank"
                fgColor="#fff"
                bgColor="#51af7f"
                style={{ height: 35, width: 35 }}
            />
        </div>
      </div>
      </div>
    </div>
    </header>
  );
}
