import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/elitedentalstudiousalogo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Switch from "react-switch";
// import Themes from "./../ThemeColor/Themes";

const Menu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [colorTheme, setTheme] = Themes();

  return (
    <div className="" style={{ margin: "0 auto", marginButton: "20px" }}>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#060606]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img src={logo} alt="Elite Dental Studio" className="w-48 h-16" />
            </Link>
            <button
              className="text-black cursor-pointer text-5xl border-r-2 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              {/* <GiHamburgerMenu style={{ color: "white" }}></GiHamburgerMenu> */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    About
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    Services
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/fileupload"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    File Upload
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/printable-forms"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    Printable Forms
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i>
                  <span className="ml-2 text-white text-xl font-bold ">
                    Contact
                  </span>
                </Link>
              </li>
              <li className="nav-item mt-2 ml-4">{/* <Switch /> */}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
