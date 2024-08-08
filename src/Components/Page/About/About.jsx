import React from "react";
import Lottie from "lottie-react";
import marketing from "../../../Animation/marketing.json";

function About() {
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <h1 className="fw-bold text-center display-6">
              About <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container my-5">
        {/* <h1 className="display-5 fw-bold text-center">A FEW WORDS ABOUT US</h1> */}
        <div className="row bg-light py-4 px-2 rounded shadow-sm">
          <div className="col-xl-4">
            <img
              src={require("../../../Image/about-2.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">
            At WaveMantra, creating amazing digital experiences is our passion. Being a top web development firm, we excel at developing one-of-a-kind solutions that are offered to the particular requirements of our customers. We work hard to offer creative, high-quality web solutions that produce results with our committed team of talented professionals, state-of-the-art technology, and trusted techniques. We can help you reach your online objectives and improve your digital presence, regardless of your size—startup, SME, or business. Together, let's take on the task of achieving your vision.

          </div>
        </div>

        <div className="row bg-light py-4 px-2 rounded shadow-sm my-5 row-reverse">
          <div className="col-xl-4">
            <img
              src={require("../../../Image/about-1.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">

            Our committed team of experts consists of designers, developers, SEO experts, advertising, and specialists with extensive backgrounds who are passionate about what they do.

          </div>

        </div>

        <div className="row bg-light py-4 px-2 rounded shadow-sm my-5">
          <div className="col-xl-4">
            <img
              src={require("../../../Image/about-3.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">
            To enhance your work in this fiercely competitive business world, please get in touch with us. Our team of professionals will assist you in managing your work or business by your goals and objectives, corporate requirements, policies, rules, and regulations, and the best custom design for your company.

          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 my-3">
            <div className="px-4 py-5 bg-white shadow-sm rounded">
              <h1 className="text-center fw-bold">
                Our Mi<span className="color">ss</span>ion
              </h1>
              <p className="text-center">
                To raise our clients' standards with us by offering them

              </p>
              <p><i className="bi bi-check-circle color"></i> Creative concepts and confidence in our offerings
              </p>
              <p><i className="bi bi-check-circle color"></i> Complete technical assistance from our group

              </p>
              <p><i className="bi bi-check-circle color"></i> Offers the greatest counsel to our clients

</p>

            </div>
          </div>
          <div className="col-xl-6 my-3">
            <div className="px-4 py-5 bg-white shadow-sm rounded">
              <h1 className="text-center fw-bold">
                Our vi<span className="color">si</span>on
              </h1>
              <p className="text-center">
                We can assist you in picturing your work thanks to our bravery and capacity for completing tasks with all of our fervor and excitement.

              </p>
              <p><i className="bi bi-check-circle color"></i> We provide you with the finest website for your business</p>
              <p><i className="bi bi-check-circle color"></i> We create branding plans for our clients.

              </p>
              <p><i className="bi bi-check-circle color"></i> We offer the top services for digital marketing.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5 footer-color rounded px-3">
          <div className="col-xl-6 Content-center">
            <div>
              <h1 className="display-7 fw-bold">Strong & <span className="color">Fantastic </span> Marketing</h1>
              <p className="p-3 my-2 shadow-sm rounded">Our strategy for expanding our company is crucial in that it involves giving our company internet marketing.
              </p>
              <p className="p-3 my-2 shadow-sm rounded">Your online presence serves as a means of demonstrating to potential clients that you are the industry leader.
              </p>
              <p className="p-3 my-2 shadow-sm rounded">Our goal is to enhance our client’s brands in the eyes of the public.
              </p>
            </div>
          </div>
          <div className="col-xl-6 rounded Content-center">
            <div>
              <Lottie animationData={marketing} loop={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
