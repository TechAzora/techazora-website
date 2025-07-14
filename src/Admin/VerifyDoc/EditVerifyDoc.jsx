import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsingleVerifyDocs, updateVerifyDocs } from "../../ReduxToolkit/Slice/VerifyDocSlice";
import { useParams, useNavigate } from "react-router-dom";
import SIdemenu from "../SIdemenu";

function EditVerifyDocs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { singleVerifyDocs } = useSelector((state) => state.VerifyDocs);

  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [documentFile, setDocumentFile] = useState(null);
  const [loading, setLoading] = useState(false); // ⬅️ Loading state

  useEffect(() => {
    dispatch(getsingleVerifyDocs(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleVerifyDocs) {
      setEmployeeName(singleVerifyDocs.employeeName || "");
      setEmail(singleVerifyDocs.email || "");
      setDesignation(singleVerifyDocs.designation || "");
      setDocumentType(singleVerifyDocs.documentType || "");
      setDocumentId(singleVerifyDocs.documentId || "");
      setIssuedDate(singleVerifyDocs.issuedDate?.split("T")[0] || "");
    }
  }, [singleVerifyDocs]);

  const onSubmitData = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const data = new FormData();
      data.append("employeeName", employeeName);
      data.append("email", email);
      data.append("designation", designation);
      data.append("documentType", documentType);
      data.append("documentId", documentId);
      data.append("issuedDate", issuedDate);
      if (documentFile) {
        data.append("documentFile", documentFile);
      }

      await dispatch(updateVerifyDocs({ id, data }));
      navigate("/verifyDocs");
    } catch (error) {
      console.error("Error updating document:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SIdemenu />
        <div className="col-lg-10 col-7" style={{ height: "100vh", overflowY: "scroll" }}>
          <div className="background-color-admin py-3 shadow-sm px-3">
            <h5>Edit Verify Document</h5>
          </div>

          <form className="row py-3 px-3" onSubmit={onSubmitData}>
            <div className="col-md-6 mb-3">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Designation</label>
              <input
                type="text"
                className="form-control"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Document Type</label>
              <input
                type="text"
                className="form-control"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Document ID</label>
              <input
                type="text"
                className="form-control"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Issued Date</label>
              <input
                type="date"
                className="form-control"
                value={issuedDate}
                onChange={(e) => setIssuedDate(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Document File (PDF)</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setDocumentFile(e.target.files[0])}
              />
            </div>

            <div className="col-md-6 d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-dark" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Updating...
                  </>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditVerifyDocs;
