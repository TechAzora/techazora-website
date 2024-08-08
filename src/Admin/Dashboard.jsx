import React, { useEffect } from 'react'
import { getBlog } from '../ReduxToolkit/Slice/BlogSlice';
import { useDispatch, useSelector, } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blog)
  const { projects} = useSelector((state) => state.project)
  useEffect(() => {
    dispatch(getBlog())
  }, [])

  return (
    <>
      <div className="col-lg-10 col-7 border">
        <div className="row">
          <div className="background-color-admin py-3 shadow-sm"><h5 className="">Dashboard</h5></div>
          {/*  */}
          <div className="col-md-4 my-2">
            <section className="shadow-sm mt-2 background-color-admin p-3 rounded d-flex justify-content-between">
              <div>
                <h2>
                  {blogs.totalBlogs ? blogs.totalBlogs :"" }
                </h2>
                <h6>Total Blog</h6>

              </div>
              <div>
                <i className='bi bi-grid-fill fs-2'></i>
              </div>
            </section>
          </div>
          <div className="col-md-4 my-2">
            <section className="shadow-sm background-color-admin mt-2 p-3 rounded d-flex justify-content-between">
              <div>
                <h2>
                  {blogs.blogsThisMonth}
                </h2>
                <h6>This Month Blogs</h6>

              </div>
              <div>
                <i className='bi bi-grid-fill fs-2'></i>
              </div>
            </section>
          </div>
          {/*  */}
          <div className="col-md-4 my-2">
            <section className="shadow-sm mt-2 background-color-admin p-3 rounded d-flex justify-content-between">
              <div>
                <h2>
                  {blogs.blogsToday}
                </h2>
                <h6>Today Blog</h6>

              </div>
              <div>
                <i className='bi bi-grid-fill fs-2'></i>
              </div>
            </section>
          </div>
          <div className="col-md-4 my-2">
            <section className="shadow-sm mt-2 background-color-admin p-3 rounded d-flex justify-content-between">
              <div>
                <h2>
                  {projects.totalprojects}
                </h2>
                <h6>Today Project</h6>

              </div>
              <div>
                <i className='bi bi-grid-fill fs-2'></i>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard