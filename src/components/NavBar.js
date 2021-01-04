import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/portfolio"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold"
          >
            Brandon Papin
            <div className="inflex-flex items-center text-white text-sm font-bold">Web Developer Student</div>
          </NavLink>
          <NavLink
            to="/portfolio/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/portfolio/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio/contact"
            activeClassName="text-blue-100 bg-blue-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
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
                    style={{ height: 35, width: 35 }}
                />
            </div>
            <div className="tooltip">
                <span className="tooltiptext">GitHub</span>
                <SocialIcon
                    url="https://github.com/bpapin19"
                    classname="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }}
                />
            </div>
        <div className="tooltip">
            <span className="tooltiptext">Instagram</span>
            <SocialIcon
                url="https://www.instagram.com/bpapin19/"
                classname="mr-4"
                target="_blank"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
            />
        </div>
      </div>
    </div>
    </header>
  );
}
