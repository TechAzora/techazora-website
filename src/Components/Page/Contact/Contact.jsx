import React, { useState } from "react";
import Lottie from "lottie-react";
import contact from "../../../Animation/Contact-2.json";
import { createcontact } from "../../../ReduxToolkit/Slice/contactSlice";
import { useDispatch } from 'react-redux';


function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [resoan, setResoan] = useState("");
  const submitData = (e) => {
    e.preventDefault()
    const data = {
      name, email, number, resoan
    }
    dispatch(createcontact(data))
    setName("")
    setEmail("")
    setNumber("")
    setResoan("")
  };
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <h1 className="fw-bold text-center AppDevelopment display-6">
              Contact <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row justify-content-center my-5">
          <div className="col-xl-5 Content-center footer-color rounded">
            <div>
              <Lottie animationData={contact} loop={true} />
            </div>
          </div>
          <div className="col-xl-5">
            <h2 className="fw-bold py-3 display-5">Feel free to contact us or just say hi!</h2>
            <form onSubmit={submitData} action="" method="post">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputnumber" className="form-label">
                  Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputnumber"
                  minLength={10}
                  maxLength={10}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="resoan"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                  value={resoan}
                  onChange={(e) => setResoan(e.target.value)}
                />
                <label htmlFor="floatingTextarea"> Reason to Contact</label>
              </div>

              <button type="submit" className="btn-style">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-xl-4 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-telephone-fill  fs-2"></i>
              <div>
                <a href="tel:+919319314403">(+91) 9643191066</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-envelope-fill  fs-2"></i>
              <div>
                <a href="mailto:info@WaveMantra.com">
                  info@WaveMantra.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-geo-alt-fill  fs-2"></i>
              <div>
                <a href="#">Dwarka, New Delhi, 110043</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
