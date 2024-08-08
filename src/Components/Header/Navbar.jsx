import { React, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../../Image/logo.png';
import LoadingBar from 'react-top-loading-bar';



function Navbar() {
  const [, SetShow] = useState("");
  const [progress, setProgress] = useState(0);
  let NavbarHandler = () => {
    let navbarSupportedContent = document.getElementById(
      "navbarNav"
    );
    SetShow(navbarSupportedContent.classList.remove("show"));
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
      setProgress(scrollPercentage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let location = useLocation();
  useEffect(() => { }, [location]);
  return (
    <>
      <div className="background-color">
        <LoadingBar
          color='#1688CD'
          height={3.5}
          shadow={`0px 0px 10px #BFC2FF`}
          progress={progress}
        />
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to='/' className="navbar-brand" href="#">
              {/* <img src={logo} alt="" /> */}
              <h2><span className="display-6 color fw-bold">Tech</span>Azora</h2>
            </Link>
            <button
              className="navbar-toggler d-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <i className="bi bi-list d-md-none fs-2" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"></i>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${location.pathname === "/" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${location.pathname === "/about" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className={`nav-link ${location.pathname === "/services" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Services
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    to="/projects"
                    className={`nav-link ${location.pathname === "/projects" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Projects
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    to="/join"
                    className={`nav-link ${location.pathname === "/join" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Join Us
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className={`nav-link ${location.pathname === "/blog" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === "/contact" ? "active-navbar" : ""
                      }`}
                    onClick={NavbarHandler}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: "280px" }}>
        <div className="offcanvas-header">
          <h2><span className="display-6 color fw-bold">W</span>ave<span>M</span>antra</h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/services"
                className={`nav-link ${location.pathname === "/services" ? "active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
                Services
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/projects"
                className={`nav-link ${location.pathname === "/projects" ? "active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
              Projects
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/blog"
                className={`nav-link ${location.pathname === "/blog" ? "active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? ".active-navbar-mobile" : ""
                  }`}
                onClick={NavbarHandler}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
