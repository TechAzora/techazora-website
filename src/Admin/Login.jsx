import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../ReduxToolkit/Slice/LoginSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const history = useNavigate();
  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.auth)

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const emailchange = (event) => {
    setemail(event.target.value);
  };
  const passwordchange = (event) => {
    setpassword(event.target.value);
  };
  let formdata = (event) => {
    event.preventDefault();
    try {
      dispatch(login({ email, password })).then((result) => {
        if (result.payload) {
          history("/dashboard")
          setemail("");
          setpassword("");
        }
      });
    } catch (error) {
      alert(error + error)
    }
  };
  return (
    <>
      {status === 'failed' && <div className="position-fixed text-center my-md-3 my-4">
        <div className="alert alert-danger" role="alert">
          {error == null ? "Admin not found! please try again leter" : error}
        </div>
      </div>}
      <div className="container-fluid login">
        <div className="row justify-content-center">
          <div className="col-md-4 margin bg-white rounded shadow">
            <main className="form-signin">
              <form onSubmit={formdata}>
              <h1 className="my-3 text-center"><span className="fw-bold color">W</span>aveMantra</h1>
              <h1 className="h3 text-center">Login</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={emailchange}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating py-2">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={passwordchange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                {/* <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" defaultValue="remember-me" /> Remember
                    me
                  </label>
                </div> */}
                <button className="w-100 btn btn-lg border my-3 text-white" style={{backgroundColor:"#6c63ff"}} type="submit">{
                  status === "loading" && "succeeded" ? <div className="spinner-border spinner-border-sm disabled text-white" style={{ color: "#1976D2" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : "Login"
                }</button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </>

  );
}

export default Login;
