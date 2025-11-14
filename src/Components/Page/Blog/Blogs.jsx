import React, { useEffect } from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../../../ReduxToolkit/Slice/BlogSlice";
import Skeleton from "react-loading-skeleton";
import io from "socket.io-client";
import { BASE_URL } from "../../../Api_url";

// const SOCKET_URL = "http://localhost:8000";

const socket = io(BASE_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog());

    socket.on("connect", () => {
      console.log("🔥 Socket Connected:", socket.id);
    });

    socket.on("blogsUpdated", (data) => {
      console.log("📢 Real-time Update Received:", data);
      dispatch(getBlog());
    });

    socket.on("disconnect", () => {
      console.log("⚠️ Socket Disconnected");
    });

    return () => {
      socket.off("blogsUpdated");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <>
      <div className="container-fluid background-color">
        <p className="fw-bold text-center display-6 py-3">Blo<span className="color">gs</span></p>
      </div>

      <div className="container mt-50 my-5">
        <div className="row">
          {status === "loading" &&
            Array.from({ length: 10 }).map((_, i) => (
              <div className="col-lg-4 my-2" key={i}>
                <Skeleton width={"100%"} height={"190px"} />
                <Skeleton width={"100%"} height={"20px"} />
                <Skeleton width={"100%"} height={"50px"} />
              </div>
            ))}

          {status === "failed" && <p>{error}</p>}

          {status === "succeeded" &&
            blogs.blogs.map((data) => {
              const { blogTitle, image, _id, createdAt } = data;
              const formattedDate = new Date(createdAt).toLocaleDateString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

              return (
                <div className="col-lg-4 my-2" key={_id}>
                  <div className="shadow-sm rounded-3">
                    <Link to={`/BlogSinglePage/${_id}`}>
                      <img
                        src={image || require("../../../Image/blog.png")}
                        alt=""
                        className="rounded img-fit"
                        width="100%"
                        height="260px"
                      />
                    </Link>
                    <div className="p-2">
                      <div className="text-secondary fw-bold">
                        Last update <i>{formattedDate}</i>
                      </div>
                      <h1 className="fs-4">{blogTitle}</h1>
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

export default Blogs;
