import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function SIdemenu() {
    const history = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        history("/admin")
    }
    return (
        <>
            <div className="col-lg-2 col-5 p-3 background-color-admin" style={{ height: "100vh" }}>
                <>                    <span className="fs-4"><span className='color fw-bold'>W</span>aveMantra</span>
                </>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className=''>
                        <NavLink to="/dashboard" className={({ isActive }) => `nav-link text-dark ${isActive ? "menucolor" : ""}`} >
                            <i className="bi bi-speedometer2" />{" "}
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/viewblog" className={({ isActive }) => `nav-link text-dark ${isActive ? "menucolor" : ""}`}>
                            <i className="bi bi-grid-fill" />{" "}
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminproject" className={({ isActive }) => `nav-link text-dark ${isActive ? "menucolor" : ""}`}>
                            <i className="bi bi-journal-album" />{" "}
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/adminContact" className={({ isActive }) => `nav-link text-dark ${isActive ? "menucolor" : ""}`}>
                            <i className="bi bi-headset" />{" "}
                            Contact
                        </NavLink>
                    </li>
                   
                </ul>
                <hr />
                <div className="dropdown">
                    <NavLink
                        to="/"
                        className="d-flex align-items-center text-dark  text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {/* <img
                            src={require("")}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        /> */}
                        Master Admin
                    </NavLink>
                    <ul className="dropdown-menu text-small  shadow">
                        <li>
                            <NavLink className="dropdown-item" to="/">
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <NavLink className='dropdown-item' to={"/admin"} onClick={logout}>logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SIdemenu