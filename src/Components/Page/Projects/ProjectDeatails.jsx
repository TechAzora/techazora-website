import React, { useEffect } from "react";
import { getsingleproject } from '../../../ReduxToolkit/Slice/ProjectSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const  singleProject  = useSelector(state => state.project.singleProject);
  const newdate = new Date(singleProject.createdAt);
  const formattedDate = newdate.toLocaleDateString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsingleproject(id));
  }, [id, dispatch]);
  return (
    <>
    <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12">
            <h3 className="fw-bold text-center py-3">
              Projects Name  :  <span className="color">{singleProject.name ? singleProject.name : "Project"}</span> 
            </h3>
          </div>
        </div>
      </div>
      <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          
          <div className="">
            <div>
              {singleProject.Image ? <img
                src={singleProject.Image}
                className="img-fluid rounded"
                alt=""
              /> : <img
                src={require("../../../Image/about-2.png")}
                className="img-fluid rounded"
                alt=""
              />}
            </div>
            <div className="p-3">
              <div dangerouslySetInnerHTML={{ __html: singleProject.description}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default ProjectDetails;
