import React from "react";

function Faq() {
  return (
    <React.Fragment>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
        <h1 className="fw-bold display-5 text-center">
              Frequently Asked <span className="color">Questions</span>
            </h1>
          <div className="col-xl-10">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. What solutions does TechAzora Platform include?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   <p>Techazora offers a range of digital solutions, including app development, web development, UI/UX design, and graphic design. From crafting user-friendly mobile apps and dynamic websites to creating intuitive user experiences and unique brand visuals, Techazora is dedicated to helping businesses build a strong digital presence.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                   2. How to use TechAzora Platform for team collaboration?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>TechAzora Platform is a team collaboration software with multiple products. Thus, it provides a lot of features for teamwork. Invite colleagues to your workspace in the TechAzora online collaboration tool and manage data together. Furthermore, start asynchronous collaboration by leaving comments on text blocks to let colleagues answer when convenient. Or communicate in our collaboration tool online via chats. Finally, assign tasks with Task lists, @ mentions and more. Use TechAzora Platform team collaboration software for getting work done!</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. How to use TechAzora Platform for clients?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>TechAzora Platform offers you Client Portals — coding-free websites for businesses. This is your perfect tool for online collaboration with clients and professional product presentation.</p>
                    <p>Use it to provide your clients with needed content based on super pages from your TechAzora Note. Edit work documents in this online tool for collaboration and all changes will automatically appear on your portal! BTW, the portals are fully-customizable online collaboration tools: you can add your logo, branding and even custom domain (CNAME). Demonstrate a competent approach to customer communication and build client trust!</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Is TechAzora Platform a free online collaboration tool?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>NTechAzora team collaboration software has a Free plan to explore its key features. It is available after a no-cost 14-day business trial, which lets you experience all the platform's powers. Then, you can choose a Free plan, but to get the best global collaboration with the online tool, consider the Pro or Business options that have more to offer. Try TechAzora Platform as an online collaboration tool when working with colleagues and clients and decide which plan of our team collaboration software best suits your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Faq;
