import "../Styles/Navbar.css";
import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose, faBars } from "@fortawesome/free-solid-svg-icons";

const NavItems = [
  {
    key: 1,
    name: "Home",
    location: "/",
  },
  {
    key: 2,
    name: "About",
    location: "/about",
  },
  {
    key: 3,
    name: "Courses",
    location: "/Courses",
  },
  {
    key: 4,
    name: "Latest News",
    location: "/latestNews",
  },
  {
    key: 5,
    name: "Contact",
    location: "/Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-20 navbar ${scrolling ? "scrolled" : ""}
         flex items-center justify-between sm:justify-evenly py-2 px-4 border-yellow-50 border-b-1 drop-shadow-md z-1`}
      >
        <div className="flex items-center gap-3">
          <div className="logo-img w-[60px] h-[60px]">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <ul className="hidden sm:flex gap-6 ">
          {NavItems.map((link) => (
            <li>
              <Link
                key={link.id}
                to={link.location}
                className={`text-sm font-bold cursor-pointer`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-evenly gap-4">
          <div className="search-wrapper text-white hidden sm:block">
            <FontAwesomeIcon className="" icon={faSearch} />
          </div>
          <Link
            to={"login"}
            className="login-section text-white hidden sm:flex items-center justify-between gap-2"
          >
            <span class="material-symbols-outlined ">account_circle</span>
            <h1 className="">Login</h1>
          </Link>
          <button
            class="icon-btn theme-switch has-state text-white"
            aria-pressed="false"
            aria-label="Toggle light and dark theme"
            data-theme-btn
          >
            <span
              class="material-symbols-outlined light-icon"
              aria-hidden="true"
            >
              light_mode
            </span>
            <span
              class="material-symbols-outlined dark-icon"
              aria-hidden="true"
            >
              dark_mode
            </span>
          </button>
          <FontAwesomeIcon
            icon={toggle ? faClose : faBars}
            className="block z-0 sm:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></FontAwesomeIcon>
        </div>
        {/* Mobile Nav  */}
        <div
          className={`mobile-nav 
         ${toggle === true ? "flex" : "hidden"}
        sm:hidden w-full py-2 px-2 border-b-1 drop-shadow-md bg-[rgba(0,0,0,0.5)]
        `}
        >
          <ul className=" text-center sm:flex gap-6">
            {NavItems.map((link) => (
              <li>
                <Link
                  key={link.id}
                  to={link.location}
                  className={`text-3xl  leading-loose text-white font-bold cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-evenly gap-2">
            <Link
              to={"/login"}
              className="login-section inline-block sm:flex flex-col items-center justify-between gap-2 text-white"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span class="material-symbols-outlined flex gap-4 text-3xl leading-loose font-bold text-white">
                account_circle <h1 className="text-white">Login</h1>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
