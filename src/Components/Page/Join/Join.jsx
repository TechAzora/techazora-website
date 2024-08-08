import React from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();
  const joinData = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <h1 className="fw-bold text-center display-6">
              Join <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-xl-12 Content-center">
            <div>
              <h1 className="fw-bold display-6">
                Make Your <span className="color">Future</span> With us
              </h1>

              <p>
              Are you prepared to have a major effect in the digital area? Talented people who are enthusiastic about innovation and technology are always in demand at TechAzora. If you are eager to work with a team on interesting projects in a fast-paced environment, we would love to talk with you. Look over the roles we have open and begin a rewarding career with us. Come define the future of web development with us at TechAzora, where creativity and technology collide.
              </p>
            </div>
          </div>
          <div className="col-xl-12 shadow-sm rounded py-3 mb-5">
            <h2 className="fw-bold">Contact Form</h2>
            <form onSubmit={joinData} action="https://formspree.io/f/mnqynbel" method="post">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputName"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last name"
                      className="form-control"
                      id="exampleInputName"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputnumber" className="form-label">
                      Number
                    </label>
                    <input
                      name="number"
                      type="number"
                      className="form-control"
                      id="exampleInputnumber"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Job Profile
                    </label>
                    <input
                      name="job Profile"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Experience
                    </label>
                    <input
                      name="Experience"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Current CTC
                    </label>
                    <input
                      name="Current CTC"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Expectation CTC
                    </label>
                    <input
                      name="Expectation CTC"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-floating mb-3">
                    <textarea
                      name="Comments"
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                </div>
                <div className="col-xl-2">
                  <button
                    type="submit"
                    className="btn-style"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
