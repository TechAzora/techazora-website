import React, { useEffect } from "react";
import './blog.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../../../ReduxToolkit/Slice/BlogSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, status, error, } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getBlog())
  }, [])
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12">
            <h1 className="fw-bold text-center display-6 py-3">
              Blo<span className="color">gs</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container mt-50 my-5">
        <div className="row">
          {status === "loading" && (
            <>
              {Array.from({ length: 10 }).map(() => (
                <div className="col-lg-4 my-2">
                  <div className="shadow-sm rounded-3">
                  <Skeleton width={"100%"} height={"190px"} count={1} />
                  <Skeleton width={"100%"} height={"20px"} count={1} />
                  <Skeleton width={"100%"} height={"50px"} count={1} />
                  </div>
                  
                </div>
              ))}
            </>
          )}
          {status === "failed" && (
            <tr>
              <td colSpan={6}>{error}</td>
            </tr>
          )}
          {status === "succeeded" && (
            blogs.blogs.map((data) => {
              const { blogTitle, image, _id, createdAt } = data;
              const newdate = new Date(createdAt);
              const formattedDate = newdate.toLocaleDateString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              });

              return (
                <div className="col-lg-4 my-2" key={_id}>
                  <div className="shadow-sm rounded-3">
                    <Link to={`/BlogSinglePage/${_id}`}>
                      {image ? <img
                        src={image}
                        alt="" className="rounded img-fit"
                        width={"100%"}
                        height={"260px"}
                      /> : <img
                        src={require("../../../Image/blog.png")}
                        alt="" className="img-fit rounded"
                        width={"100%"}
                        height={"260px"}
                      />}
                    </Link>
                    <div className="p-2">
                      <div className="pt-2 text-secondary fw-bold">
                        last update <i>{formattedDate}</i>
                      </div>
                      <h1 className="fs-4">{blogTitle}</h1>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
      {/*readmore buttom*/}

    </>
  );
}

export default Blogs;
