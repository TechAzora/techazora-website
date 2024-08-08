import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid footer-color py-5">
        <div className="row justify-content-center py-3">
          <div className="col-xl-10">
            <div className="row">
              <div className="col-xl-3">
                <Link to="/" className="navbar-brand" href="#">
                <h2><span className="display-6 color fw-bold">Tech</span>Azora</h2>
                </Link>
                <p className="">
                  TechAzora stands out as a premier Web & App Development
                  Company, pioneering innovative ideas that culminate in
                  exceptional website craftsmanship.
                </p>
              </div>
              <div className="col-xl-3">
                <h4 className="fw-bold">Company</h4>
                <p>
                  <Link to={"/about"} className="text-dark">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to={"/Services"} className="text-dark">
                    Services
                  </Link>
                </p>
                <p>
                  <Link to={"/join"} className="text-dark">
                    Join Us
                  </Link>
                </p>
                <p>
                  <Link to={"/blog"} className="text-dark">
                    Blog
                  </Link>
                </p>
                <p>
                  <Link to={"/contact"} className="text-dark">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div className="col-xl-3">
                <h4 className="fw-bold">Services</h4>
                <p>
                  <Link to={"/Services"} className="text-dark">
                    Website Development
                  </Link>
                </p>
                <p>
                  <Link to={"/Services"} className="text-dark">
                    App Development
                  </Link>
                </p>
                <p>
                  <Link to={"/Services"} className="text-dark">
                    Graphic Designing
                  </Link>
                </p>
                <p>
                  <Link to={"/Services"} className="text-dark">
                    Digital Marketing
                  </Link>
                </p>
              </div>
              <div className="col-xl-3">
                <h4 className="fw-bold">Contact Us</h4>
                <p>
                  {" "}
                  <i className="bi bi-geo-alt text-secondary"></i> Dwarka, New
                  Delhi, 110043
                </p>
                <p>
                  <i className="bi bi-telephone text-secondary"></i>
                  <a href="tel:+918700282172" className="text-dark">
                    (+91) 9643191066
                  </a>
                </p>
                <p>
                  <i className="bi bi-envelope text-secondary"></i>
                  <a href="mailto:TechAzoras@gmail.com" className="text-dark">
                    {" "}
                    info.techazora@gmail.com
                  </a>
                </p>
                <div className="d-flex">
                  {/* <i className="bi bi-facebook  ions fs-4 text-primary"></i> */}
                  <a href="https://wa.me/9643191066" target="?blank">
                    {" "}
                    <i className="bi bi-whatsapp mx-2 ions fs-4 text-success"></i>
                  </a>
                  <a href="https://www.instagram.com/techAzora/" target="_blank">
                    {" "}
                    <i className="bi bi-instagram mx-2 ions fs-4 text-danger"></i>
                  </a>
                  {/* <i className="bi bi-twitter-x mx-2 ions fs-4 text-dark"></i> */}
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="col-xl-10">
            <p style={{ fontSize: "small" }}>
              TechAzora is Delhi's leading integrated social media and digital
              marketing enterprise. With a team exceeding seventy-five
              professionals, we proudly stand as an award-winning full-stack
              digital marketing organization in India. We specialize in
              delivering creative and innovative solutions for brands aiming to
              expand their online presence. If you're reading this, you've found
              the right platform to collaborate with one of the finest creative
              marketing agencies in India.
            </p>
            <p style={{ fontSize: "small" }}>
              Privacy Policy | All Rights Reserved by{" "}
              <span className="color">
                {" "}
                <a href="https://TechAzora.com/">TechAzora</a>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
