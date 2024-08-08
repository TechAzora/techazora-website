import React from "react";
import SIdemenu from "./SIdemenu";

function Subcategory() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SIdemenu />
        <div className="col-lg-10 border p-5 displayfixedright">
          <h5 className="text-center">Subcategory</h5>
          <hr />
          <form>
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  choose Category
                </label>
                <div className="border rounded">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">category</option>
                    <option selected="">Sub category</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sub Category
                </label>
                <div className="border rounded">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Sub category</option>
                    <option value={1}>Fruits</option>
                    <option value={2}>vegetables</option>
                    <option value={3}>Dry Fruits</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sub category Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter icon name"
                  aria-describedby="emailHelp"
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

export default Subcategory;
