// import axios from 'axios';
import React, { useEffect } from 'react'
import SIdemenu from '../SIdemenu'
import { useDispatch, useSelector, } from 'react-redux';
import { getproject, deleteprojects } from '../../ReduxToolkit/Slice/ProjectSlice';
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects.projects)
  const status = useSelector((state) => state.project.status)
  const error = useSelector((state) => state.project.error)
  useEffect(() => {
    if (status === "idle") {
      dispatch(getproject())
    }
  }, [status, dispatch])
  const deleteproject = async (deleteprojectId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this project?");
    if (isConfirmed) {
      try {
        await dispatch(deleteprojects(deleteprojectId));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <SIdemenu />
        <div className="col-lg-10 col-7 border" style={{ height: "100vh", overflowY: "scroll" }}>

        <div className="row">
            <div className="background-color-admin py-3 shadow-sm d-flex justify-content-between"><h5>Projects (
              {projects ? projects.length : ""}
              )</h5>
             <Link to={"/addproject"}> <button className='btn btn-dark'><i className='bi bi-plus-circle'></i> Projects</button></Link>

            </div>
          </div>
          <div className='table-responsive'>
            <table className="table my-3">
              <thead>
                <tr className="bg-dark text-white">
                  <th scope="col">s.no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {status === "loading" && (
                  <tr>
                    <td colSpan={7}>
                      <Skeleton count={10} height={80} />
                    </td>

                  </tr>
                )}
                {status === "failed" && (
                  <tr>
                    <td colSpan={7}>{error}</td>
                  </tr>
                )}
                {status === "succeeded" && (
                  projects.map((data, index) => {
                    const { name, Image, thumbnail, description, createdAt, _id } = data;
                    const newdate = new Date(createdAt);
                    const formattedDate = newdate.toLocaleDateString("default", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    });
                    return (
                      <tr key={_id}>
                        <th scope="row">
                          {index + 1}
                        </th>
                        <td>{name}</td>
                        <td>{thumbnail ? <img src={thumbnail}
                          width={50}
                          height={50}

                          className='rounded-circle img-fit' alt="" /> : <img src={require('../../Image/extranet-icon.svg')} className='img-fluid' alt="" />}</td>
                        

                        <td>{formattedDate}</td>
                        <td>
                          <Link to={`/editProject/${_id}`}><i className='bi bi-pencil-square fs-4'></i></Link>
                          <div>
                            <i className='bi bi-trash text-danger fs-4' onClick={() => deleteproject(_id)} style={{ cursor: "pointer" }}></i>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project