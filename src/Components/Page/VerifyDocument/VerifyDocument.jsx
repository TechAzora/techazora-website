import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyDocumentById } from "../../../ReduxToolkit/Slice/VerifyDocSlice";

const VerifyDocumentPage = () => {
  const dispatch = useDispatch();
  const [documentId, setDocumentId] = useState("");

  const { verifiedResult, status } = useSelector((state) => state.VerifyDocs);

  const handleVerify = () => {
    if (documentId.trim() !== "") {
      dispatch(verifyDocumentById({ documentId }));
    }
  };

  return (
    <div className="container py-3" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body px-5 py-4">
              {/* Company Header */}
              <div className="text-center mb-4">
                <img
                  src="/logo192.png" // Replace with your company logo
                  alt="Company Logo"
                  style={{ width: "80px" }}
                  className="mb-2"
                />
                <h4 className="fw-bold text-primary">TechAzora Document Verification</h4>
                <p className="text-muted small">Secure | Authentic | Reliable</p>
              </div>

              {/* Input Field */}
              <div className="mb-3">
                <label htmlFor="documentId" className="form-label fw-semibold">
                  Enter Verification ID
                </label>
                <input
                  type="text"
                  id="documentId"
                  className="form-control form-control-lg rounded-3"
                  placeholder="E.g: TA-EXP-20XX-00XX"
                  value={documentId}
                  onChange={(e) => setDocumentId(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid mb-3">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleVerify}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Verifying..." : "Verify Document"}
                </button>
              </div>

              {/* Verified Result Display */}
              {verifiedResult && (
                <div
                  className={`alert mt-4 ${verifiedResult.success ? "" : "alert-danger"
                    } rounded-3`}
                >
                  <h5 className="mb-2 fw-bold">
                    {verifiedResult.success ? "✅ Valid Document" : "❌ Invalid Document"}
                  </h5>

                  {verifiedResult.success ? (
                    <div>
                      <ul className="list-unstyled small mb-2">
                        <li><strong>Employee Name:</strong> {verifiedResult.data.employeeName}</li>
                        {/* <li><strong>Designation:</strong> {verifiedResult.data.designation}</li>
                        <li><strong>Document Type:</strong> {verifiedResult.data.documentType}</li> */}
                        <li><strong>Document ID:</strong> {verifiedResult.data.documentId}</li>
                        {/* <li>
                          <strong>Issued Date:</strong>{" "}
                          {new Date(verifiedResult.data.issuedDate).toLocaleDateString()}
                        </li> */}
                      </ul>
                      {/* <a
                        href={verifiedResult.data.documentFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm rounded-pill"
                      >
                        View Document PDF
                      </a> */}
                      <img src={verifiedResult.data.documentFile} alt="" className="img-fluid" />
                    </div>
                  ) : (
                    <div>
                      <p className="small mb-0">{verifiedResult.message}</p>

                      <div className="text-center text-danger mt-3 small">
                        The credentials you entered are not found in our records.
                        <br />
                        If you have received this document from an external source, please note that TechAzora Pvt Ltd is not responsible for any forged or invalid documents.
                        
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="text-center text-muted mt-4 small">
                © {new Date().getFullYear()} TechAzora Pvt Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyDocumentPage;
