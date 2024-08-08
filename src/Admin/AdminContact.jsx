// import axios from 'axios';
import React, { useEffect } from 'react'
import SIdemenu from './SIdemenu'
import { useDispatch, useSelector, } from 'react-redux';
import { getcontact, deletecontacts } from '../ReduxToolkit/Slice/contactSlice';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function AdminContact() {
    const dispatch = useDispatch();
    const { contacts, status, error } = useSelector((state) => state.contact)
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getcontact())
        }
    }, [status,dispatch])
    const deletecontact = async (deletecontactId) => {
        const isConfrimed = window.confirm("Are your sure to delete this contact?")
        if (isConfrimed) {
            dispatch(deletecontacts(deletecontactId))
        } else {
        }
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-end">
                <SIdemenu />
                <div className="col-lg-10 col-7 border" style={{ height: "100vh", overflowY: "scroll" }}>

                    <div className="row">
                        <div className="background-color-admin py-3 shadow-sm d-flex justify-content-between"><h5>contacts (
                            {contacts ? contacts.length : ""}
                            )</h5>
                        </div>
                    </div>
                    <div className='table-responsive'>
                        <table className="table my-3">
                            <thead>
                                <tr className="bg-dark text-white">
                                    <th scope="col">s.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Resoan</th>
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
                                    contacts.map((data, index) => {
                                        const { name, number, email, resoan, _id, createdAt } = data;
                                        const newdate = new Date(createdAt);
                                        // Convert the date to a more readable format "day, month, year"
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
                                                <td>{email}</td>
                                                <td>{number}</td>
                                                <td>{resoan}</td>
                                                <td>{formattedDate}</td>
                                                <td>
                                                    <div>
                                                        <i className='bi bi-trash text-danger fs-4' onClick={() => deletecontact(_id)} style={{ cursor: "pointer" }}></i>
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

export default AdminContact