import axios from "axios";
import React, { useState } from "react";
import SIdemenu from "./SIdemenu";
import SuccessMassage from "./SuccessMassage";

function AdminNavbar() {
  const [massage,setMassage] = useState("d-none")
  const [NavbarData, SetNavbarData] = useState({
    category: "",
    Subcategory: "",
  });
  const NavbarCategory = (event) => {
    SetNavbarData({ ...NavbarData, [event.target.name]: event.target.value });
  };
  const onsubmitData = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3004/Navbar", NavbarData);
    SetNavbarData({
      category: "",
      Subcategory: "",
    });
    setMassage("")
    setTimeout(() => {
      setMassage("d-none");
    }, 1500);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <SIdemenu />
        <div className="col-lg-10 border p-5 displayfixedright">
          <h5 className="text-center">Navbar</h5>
          <SuccessMassage DisplayNone = {massage} />
          <hr />
          <form onSubmit={onsubmitData}>
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Enter Category name"
                  value={NavbarData.category}
                  name="category"
                  onChange={NavbarCategory}
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Url
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Enter url name"
                  value={NavbarData.Subcategory}
                  name="Subcategory"
                  onChange={NavbarCategory}
                />
              </div>
            </div>
            <div className="col-md-6 d-grid gap-2 mt-3">
              <button className="btn btn-dark fw-bold">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
