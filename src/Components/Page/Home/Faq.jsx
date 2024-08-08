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
                    1. What solutions does Wavemantra Platform include?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   <p>Wavemantra Platform is an information management and team collaboration software. Build your knowledge base and easily share your data with the best online collaboration tools from Wavemantra :</p>
                   <p>Wavemantra Note organizes documentation and provides an all-in-one digital work hub. Use this project collaboration tool online on the web.</p>
                   <p>Wavemantra Capture is an app for capturing screenshots & screen recordings. This asynchronous collaboration tool helps you explain things better and with ease. You can use the app for online team collaboration as a software app for Windows or as a Chrome extension.</p>
                   <p>Wavemantra Clipper extension saves web pages, articles, emails and PDFs. It’s an online tool that can be used for collaboration too. Save only necessary content from the page without irrelevant images or ads. Add it to another team collaboration software — Wavemantra Note and share your findings with coworkers. Use the Wavemantra Clipper collaboration tool online as a Chrome or Firefox extension.</p>
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
                   2. How to use Wavemantra Platform for team collaboration?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Wavemantra Platform is a team collaboration software with multiple products. Thus, it provides a lot of features for teamwork. Invite colleagues to your workspace in the Wavemantra online collaboration tool and manage data together. Furthermore, start asynchronous collaboration by leaving comments on text blocks to let colleagues answer when convenient. Or communicate in our collaboration tool online via chats. Finally, assign tasks with Task lists, @ mentions and more. Use Wavemantra Platform team collaboration software for getting work done!</p>
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
                    3. How to use Wavemantra Platform for clients?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Wavemantra Platform offers you Client Portals — coding-free websites for businesses. This is your perfect tool for online collaboration with clients and professional product presentation.</p>
                    <p>Use it to provide your clients with needed content based on super pages from your Wavemantra Note. Edit work documents in this online tool for collaboration and all changes will automatically appear on your portal! BTW, the portals are fully-customizable online collaboration tools: you can add your logo, branding and even custom domain (CNAME). Demonstrate a competent approach to customer communication and build client trust!</p>
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
                    4. Is Wavemantra Platform a free online collaboration tool?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>NWavemantra team collaboration software has a Free plan to explore its key features. It is available after a no-cost 14-day business trial, which lets you experience all the platform's powers. Then, you can choose a Free plan, but to get the best global collaboration with the online tool, consider the Pro or Business options that have more to offer. Try Wavemantra Platform as an online collaboration tool when working with colleagues and clients and decide which plan of our team collaboration software best suits your needs.</p>
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
