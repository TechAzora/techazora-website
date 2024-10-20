import React from "react";
import Lottie from "lottie-react";
import websiteDevelopment from "../../../Animation/Web App Development.json";

function Service() {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row justify-content-center">
          <div className="col-xl-4">
            <div className="p-2 text-center">
              <div className="Content-center">
                <div>
                  <Lottie animationData={websiteDevelopment} loop={true} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 Content-center">
            <div className="p-2">
              <h4 className="fw-bold display-6">
                Unlock More <span className="color"> Leads </span>: Our Proven Solution is Here.
              </h4>
              <h1 className="fs-5">
                Maximize Online Exposure for Higher Revenue: SEO, SMO, PPC, SEM Solutions.
              </h1>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-color">
        <div className="row justify-content-center py-5">
          <div className="col-xl-10">
            <h1 className="display-5 fw-bold text-center">
            Your <span className="color">All-In-One</span> Digital Service Partner
                
            </h1>
            <div className="row">
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h2 className="text-center fs-4 fw-bold">
                      <span className="color">Web </span>Development
                    </h2>
                    {/* <img
                      src={require("../../../Image/web.png")}
                      alt=""
                      className="img-fluid"
                    /> */}
                    <div className="text-center">
                    <i className="bi bi-browser-chrome fs-1"></i>                    </div>
                    <p className="fs-5">
                      Expert web development services tailored to your needs. Elevate your online presence with our cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h2 className="text-center fs-4 fw-bold">
                      <span className="color">App </span>Development
                    </h2>
                    {/* <img
                      src={require("../../../Image/app.png")}
                      alt=""
                      className="img-fluid"
                    /> */}
                    <div className="text-center">
                    <i className="bi bi-google-play fs-1 mx-1"></i>      
                    <i className="bi bi-apple fs-1"></i>
                                  </div>
                    <p className="fs-5">
                      Custom app development from design to deployment, bringing your ideas to life for engaged audiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h2 className="fs-4 fw-bold text-center">
                      <span className="color">Digital </span>Marketing
                    </h2>
                    {/* <img
                      src={require("../../../Image/seo.png")}
                      alt=""
                      className="img-fluid"
                    /> */}
                    <div className="text-center">
                    <i className="bi bi-megaphone-fill fs-1"></i>
                                        </div>
                    <p className="fs-5">
                      Innovative Strategies for Business Enhancement: Humanizing Marketing Efforts with Data-Driven Precision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
