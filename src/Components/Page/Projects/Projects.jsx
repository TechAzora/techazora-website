// import axios from 'axios';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getproject,
  deleteprojects,
} from "../../../ReduxToolkit/Slice/ProjectSlice";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { useParams } from "react-router-dom";

function Projects() {
  // const {id} = useParams()

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects.projects);
  const status = useSelector((state) => state.project.status);
  const error = useSelector((state) => state.project.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getproject());
    }
  }, [status, dispatch]);
  const deleteproject = async (deleteprojectId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (isConfirmed) {
      try {
        await dispatch(deleteprojects(deleteprojectId));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12">
            <h1 className="fw-bold text-center display-6 py-3">Projects</h1>
          </div>
        </div>
      </div>
      <div className="container mt-50 my-5">
        <div className="row">
          {status === "loading" && (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <div className="col-lg-4 my-2" key={index}>
                  <div className="shadow-sm rounded border p-2">
                    <div className="row justify-content-around">
                      <div className="col-lg-3 col-3">
                        <Skeleton width={"100"} height={"80px"} count={1} />
                      </div>
                      <div className="col-lg-9 col-9">
                        <div className="d-flex justify-content-between">
                          <Skeleton width={"120px"} height={"20px"} count={1} />
                          <Skeleton width={"100px"} height={"20px"} count={1} />
                        </div>
                        <div className="d-flex">
                          <Skeleton width={"120px"} height={"20px"} count={1} />
                        </div>
                        <Skeleton width={"120px"} height={"15px"} count={1} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {status === "failed" && <div className="col-lg-12">{error}</div>}
          {status === "succeeded" &&
            projects.map((data) => {
              const { name, thumbnail, createdAt, _id, weblink, applink } =
                data;
              const newdate = new Date(createdAt);
              const formattedDate = newdate.toLocaleDateString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

              return (
                <div className="col-lg-4 my-2" key={_id}>
                  <div className="shadow-sm rounded border p-2">
                    <div className="row justify-content-around">
                      <div className="col-lg-3 col-3">
                        <Link to={`/ProjectDetails/${_id}`}>
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt=""
                              className="rounded img-fit"
                              height={80}
                              width={80}
                            />
                          ) : (
                            <img
                              src={require("../../../Image/logo.png")}
                              alt=""
                              className="img-fit rounded"
                              width={"100%"}
                              height={"260px"}
                            />
                          )}
                        </Link>
                      </div>
                      <div className="col-lg-9 col-9">
                        <div className="d-flex justify-content-between">
                          <h6>{name}</h6>
                          {/* <h6
                            style={{ fontSize: "11px" }}
                            className="px-2 py-1 background-color rounded shadow-sm"
                          >
                            <Link to={`/ProjectDetails/${_id}`}>Read More</Link>
                          </h6> */}
                        </div>
                        <div className="d-flex justify-content-between">
                        {applink && (
                          <div className="d-flex">
                            <h6
                              className="bg-light rounded px-2 py-1"
                              style={{ fontSize: "13px" }}
                            >
                              <a href={applink} target="_blank">
                                Get App
                              </a>
                            </h6>
                          </div>
                        )}
                        {weblink && (
                          <h6
                            className="text-primary px-2 py-1 rounded bg-light"
                            style={{ fontSize: "13px" }}
                          >
                            <a href={weblink} target="_blank">
                              Visit Website
                            </a>
                          </h6>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Projects;
