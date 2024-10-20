import React from "react";
import Lottie from "lottie-react";
import marketing from "../../../Animation/marketing.json";

function About() {
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <p className="fw-bold text-center display-6">
              About <span className="color">Us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
      <div className="row justify-content-center">
          <div className="col-xl-12 my-3">
            <div className="px-4 py-5">
              <h1 className="text-center fw-bold">
                Mi<span className="color">ss</span>ion &  vi<span className="color">si</span>on
              </h1>
              <p className="">
              At TechAzora, we pride ourselves on our creative concepts and unwavering confidence in our offerings. Our team provides complete technical assistance, ensuring that you receive the best guidance and support throughout your journey with us. We are dedicated to delivering the finest websites tailored to your business needs, along with comprehensive branding strategies that help your brand stand out. Additionally, our top-tier digital marketing services are designed to maximize your online presence, driving growth and success in the digital landscape.              </p>
             
            </div>
          </div>
         
        </div>
        <div className="row bg-light py-4 px-2 rounded shadow-sm my-3">
          <div className="col-xl-12">
            <h2 className="fs-2">
              <span className="color">App</span> Development
            </h2>
            <p>
              At TechAzora, our app development team excels in creating dynamic,
              user-friendly applications that resonate with your audience. We
              leverage powerful technologies like Flutter and React Native to
              build cross-platform apps that deliver seamless experiences on
              both iOS and Android. Whether you're looking to launch a new app
              or revamp an existing one, we focus on creating scalable,
              high-performance solutions that align with your business goals and
              enhance your users' digital journey.
            </p>
          </div>
        </div>

        <div className="row  py-4 px-2 rounded shadow-sm my-3">
          <div className="col-xl-12">
            <h2 className="fs-2">
              <span className="color">Web</span> Design and Development
            </h2>
            <p>
              Our web development services at TechAzora are centered on building
              robust, scalable websites that not only look stunning but also
              deliver exceptional performance. Using the MERN stack, we create
              responsive, interactive websites that cater to your specific
              business needs. From sleek, modern designs to complex,
              feature-rich web applications, our team ensures your online
              presence is both visually appealing and highly functional, driving
              user engagement and business growth.
            </p>
          </div>
        </div>

        <div className="row bg-light  py-4 px-2 rounded shadow-sm my-3">
          <div className="col-xl-12">
            <h2 className="fs-2">
              <span className="color">Graphic</span> Design
            </h2>
            <p>
              TechAzora's graphic design team brings creativity and innovation
              to every project, crafting visually compelling designs that
              capture your brand's essence. We specialize in creating custom
              graphics that elevate your brand identity and resonate with your
              target audience. Whether it’s logos, marketing materials, or
              complete branding packages, our designers work closely with you to
              produce designs that stand out in the crowded digital landscape.
            </p>
          </div>
        </div>

        <div className="row  py-4 px-2 rounded shadow-sm my-3">
          <div className="col-xl-12">
            <h2 className="fs-2">
              <span className="color">Digital</span> Marketing
            </h2>
            <p>
              At TechAzora, our digital marketing services are designed to
              maximize your online reach and engagement. We specialize in SEO,
              social media marketing, and comprehensive digital strategies that
              drive traffic, boost visibility, and convert visitors into loyal
              customers. Our marketing experts use data-driven techniques to
              optimize your online presence, ensuring that your brand reaches
              the right audience and achieves measurable results in today’s
              competitive market.
            </p>
          </div>
        </div>
        <div className="row my-5 footer-color rounded px-3">
          <div className="col-xl-6 Content-center">
            <div>
              <h2 className="display-7 fw-bold">
                Strong & <span className="color">Fantastic </span> Marketing
              </h2>
              <p className="p-3 my-2 shadow-sm rounded">
                Our strategy for expanding our company is crucial in that it
                involves giving our company internet marketing.
              </p>
              <p className="p-3 my-2 shadow-sm rounded">
                Your online presence serves as a means of demonstrating to
                potential clients that you are the industry leader.
              </p>
              <p className="p-3 my-2 shadow-sm rounded">
                Our goal is to enhance our client’s brands in the eyes of the
                public.
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
