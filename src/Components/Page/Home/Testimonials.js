import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonials.css";

function Testimonials() {
  let content = [
    {
      id: "1",
      heading: "Amit Kumar",
      pra: "Keeping in mind startups and entrepreneurs, WaveMantra provides premium web design and development services and all this at an affordable price. I am going to collaborate with them for my SMO services. ",
    },
    {
      id: "2",
      heading: "Yuva Singh",
      pra: "WaveMantra delivered us a totally new look and consider for our accounting website and we are highly delighted by getting a fabulous output quality. ",
    },
    {
      id: "3",
      heading: "Sachin",
      pra: "All along the process, Mr. Manish and his team were Pretty creative and responsive. They Developed and delivered the project the same way we wanted to. For me, this was the best team I have ever worked with, so I would sincerely recommend them. ",
    },
    {
      id: "4",
      heading: "Sushil",
      pra: "WaveMantra has made easier for us to keep our business up-to-date as we got our dynamic website built by them. The whole team is very warm, knowledgeable and professional. Honestly, we would suggest contacting WaveMantra if you need the best Digital help.",
    },
  ];
  return (
    <>
      <div className="container-fluid mt-3 background-color py-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <h1 className="fw-bold pb-4 display-5 text-center">
              Find Out What People Are Saying About <span className="color">WaveMantra</span>
            </h1>
            <OwlCarousel
              className="owl-theme"
              items={3}
              margin={15}
              ltr={true}
              nav={false}
              dots={true}
              //   slideTransition={"linear"}
              //   autoplay={true}
              loop={true}
              center={true}
              //   autoplayTimeout={3000}
              //   autoplaySpeed={8000}
              //   autoplayHoverPause={true}
              autoHeight={true}
              responsive={{
                0: { items: 1 },
                520: { items: 3 },
                768: { items: 3 },
                1200: { items: 3 },
                1400: { items: 3 },
                1600: { items: 4 },
              }}
            >
              {content.map((index) => (
                <div className="item background" key={index.id}>
                  <div className="text-center ">
                  {/* <img src={require("../../../Image/userimage.png")} alt="" width="32" height="32" className="rounded-circle me-2"/> */}
                    <div className="bi bi-person-circle display-1"></div>
                    <div className="color">{index.heading}</div>    
                  </div>
                  <p>{index.pra}</p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
