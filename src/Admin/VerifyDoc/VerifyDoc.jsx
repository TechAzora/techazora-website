import React, { useEffect } from "react";
import SIdemenu from "../SIdemenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getVerifyDocs,
  deleteVerifyDocss,
} from "../../ReduxToolkit/Slice/VerifyDocSlice";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function VerifyDocs() {
  const dispatch = useDispatch();

  const { VerifyDocss, status, error } = useSelector((state) => state.VerifyDocs);
  console.log(VerifyDocss)

  useEffect(() => {
    if (status === "idle") {
      dispatch(getVerifyDocs());
    }
  }, [status, dispatch]);

  const deleteVerifyDocs = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this document?");
    if (isConfirmed) {
      try {
        await dispatch(deleteVerifyDocss(id));
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <SIdemenu />
        <div
          className="col-lg-10 col-7 border"
          style={{ height: "100vh", overflowY: "scroll" }}
        >
          <div className="row">
            <div className="background-color-admin py-3 shadow-sm d-flex justify-content-between">
              <h5>
                Verify Documents (
                {VerifyDocss && Array.isArray(VerifyDocss) ? VerifyDocss.length : 0})
              </h5>
              <Link to={"/addVerifyDocs"}>
                <button className="btn btn-dark">
                  <i className="bi bi-plus-circle"></i> Add Document
                </button>
              </Link>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table my-3">
              <thead>
                <tr className="bg-dark text-white">
                  <th scope="col">S.No</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Document</th>
                  <th scope="col">Issued Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {status === "loading" && (
                  <tr>
                    <td colSpan={5}>
                      <Skeleton count={6} height={50} />
                    </td>
                  </tr>
                )}

                {status === "failed" && (
                  <tr>
                    <td colSpan={5} className="text-danger text-center">
                      {error}
                    </td>
                  </tr>
                )}

                {status === "succeeded" &&
                  VerifyDocss.map((doc, index) => {
                    const {
                      _id,
                      employeeName,
                      documentFile,
                      issuedDate,
                      documentId,
                    } = doc;

                    const formattedDate = new Date(issuedDate).toLocaleDateString(
                      "default",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    );

                    return (
                      <tr key={_id}>
                        <th scope="row">{index + 1}</th>
                        <td>{employeeName}</td>
                        <td>
                          {documentFile ? (
                            <a
                              href={documentFile}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                             <img src={documentFile} height={40} width={40} alt="" />
                            </a>
                          ) : (
                            "No File"
                          )}
                        </td>
                        <td>{formattedDate}</td>
                        <td>
                          <Link to={`/editVerifyDocs/${_id}`}>
                            <i className="bi bi-pencil-square fs-5 me-2"></i>
                          </Link>
                          <i
                            className="bi bi-trash text-danger fs-5"
                            onClick={() => deleteVerifyDocs(_id)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyDocs;
