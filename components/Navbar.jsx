"use client";
import "@styles/components/navbar.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Mode from "./Mode";
import ModeMob from "./ModeMob";
// Fix Gradient bar for light mode
const Navbar = () => {
  // get dark mode toggle state from local storage

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("About");
  const pages = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const handleClick = (e, page) => {
    // e.preventDefault();
    setIsMenuOpen(false);
    setActivePage(page);
  };

  //   find active page from the pages array
  useEffect(() => {
    const activePage = pages.find(
      (page) => page.path === window.location.pathname
    );
    setActivePage(activePage);
  }, []);

  // make the current linear gradient moves in x axis according to motion of mouse hovering the navbar
  //also the transitions should be fluid like the gradient should not jump from one point to another
  const handleMouseMove = (e) => {
    const gradientBar = document.querySelector(".gradient-bar");
    const nav = document.querySelector(".nav-wrapper");
    const navWidth = nav.offsetWidth;
    const navHeight = nav.offsetHeight;
    const x = e.pageX - nav.offsetLeft;
    const y = e.pageY - nav.offsetTop;
    const xWalk = (x / navWidth) * 100;
    const yWalk = (y / navHeight) * 100;

    if (localStorage.getItem("darkMode") === "false") {
      gradientBar.style.background = `linear-gradient(
      to right,
      #c0e8ff 0%,
      #0ac6ff ${xWalk + 2}%,
      #0ac6ff ${xWalk - 2}%,
      #c0e8ff 100%
    )`;
    } else {
      gradientBar.style.background = `linear-gradient(
        to right,
        #123245 0%,
        rgb(0, 225, 255) ${xWalk + 2}%,
        rgb(0, 225, 255) ${xWalk - 2}%,
        #123245 100%
      )`;
    }
  };

  const toggleHamburger = () => {
    setIsMenuOpen((prevState) => !prevState);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("open");
  };
  // close hamburger menu when page is changed
  useEffect(() => {
    setIsMenuOpen(false);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("open");
  }, [activePage]);

  return (
    <nav>
      <div className="nav-wrapper" onMouseMove={handleMouseMove}>
        {/* Left Logo */}
        {activePage.name === "About" ? (
          <span className="span-nav">
            <span className="half-bold">TEJAS</span>
            <span className="half-light">BHOVAD</span>
          </span>
        ) : (
          <span className="page-title span-nav" style={{ color: "#37a6e6" }}>
            &lt;{activePage.name}&gt;
          </span>
        )}
        {/* Right Links Desktop */}
        <span className="links span-nav">
          {pages.map((page) => {
            return (
              <li key={page.name}>
                <Link
                  onClick={(e) => handleClick(e, page)}
                  href={page.path}
                  className={`${page.name} nav-links`}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
          {/* Dark mode toggle */}
          <Mode />
        </span>
        {/* Links mobile */}
        {/* Hamburger menu */}
        <div className="hmb-container">
          <div id="hamburger" onClick={toggleHamburger}>
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </div>
          {/* Circle Menu for Mobile */}

          <div className={`circle-menu ${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen && (
              <ul>
                {pages.map((page) => (
                  <li key={page.name} onClick={(e) => handleClick(e, page)}>
                    <Link href={page.path} className={`${page.name} nav-links`}>
                      {page.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <ModeMob />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="gradient-bar" onMouseMove={handleMouseMove}></div>
    </nav>
  );
};

export default Navbar;
