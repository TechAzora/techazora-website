import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import SIdemenu from "./SIdemenu";
import {getsingleBlog ,updateBlog} from '../ReduxToolkit/Slice/BlogSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from 'react-router-dom';
function EditBlog() {
    const { singleBlogs, status } = useSelector(state => state.blog)
    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getsingleBlog(id))
    }, [id])
    const editor = useRef(null);
    const [blogTitle, setblogTitle] = useState("");
    const [description, setdescription] = useState("");
    const [slugUrl, setslugUrl] = useState("");
    const [metaTitle, setmetaTitle] = useState("");
    const [metaDescription, setmetaDescription] = useState("");
    const [metaKeyword, setmetaKeyword] = useState("");
    const [image, setimage] = useState("");
    //set fields for editing
    useEffect(()=>{
        if (singleBlogs) {
            setblogTitle(singleBlogs.blogTitle);
            setdescription(singleBlogs.description);
            setslugUrl(singleBlogs.slugUrl);
            setmetaTitle(singleBlogs.metaTitle);
            setmetaKeyword(singleBlogs.metaKeyword);
            setmetaDescription(singleBlogs.metaDescription)
            if (singleBlogs.image) {
                setimage(singleBlogs.image);

            }
        }
    },[singleBlogs])
    const onsubmitdata = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("blogTitle", blogTitle);
            formData.append("description", description);
            formData.append("slugUrl", slugUrl);
            formData.append("metaTitle", metaTitle);
            formData.append("metaKeyword", metaKeyword);
            formData.append("metaDescription", metaDescription);
            formData.append("image", image);
            dispatch(updateBlog({formData,id}))
            navigate("/viewblog")
            // setMassage("Blog created successfully!");
            setblogTitle("");
            setdescription("");
            setslugUrl("");
            setmetaTitle("");
            setmetaKeyword("");
            setmetaDescription("")
            setimage(null);
        } catch (error) {
            // setMassage("Failed to create blog!");
            console.error(error);
        }
    }

    return (
        <>
            <div className="container-fluid" style={{ zindex: "999px" }}>
                <div className="row justify-content-end">
                    <SIdemenu />
                    <div className="col-lg-10 col-7" style={{ height: "100vh", overflowY: "scroll" }}>
                     <div className="row">
                     <div className="background-color-admin py-3 shadow-sm"><h5 className="">Edit Blog</h5></div>
                     </div>

                        <form onSubmit={onsubmitdata}>
                            <div className="row  px-1 py-2">

                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Blog Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="blog title"
                                        aria-describedby="emailHelp"
                                        name="name"
                                        value={blogTitle}
                                        onChange={(e) => setblogTitle(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Slug Url
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Slug Url"
                                        aria-describedby="emailHelp"
                                        name="slug"
                                        value={slugUrl}
                                        onChange={(e) => setslugUrl(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Meta Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Meta Title"
                                        aria-describedby="emailHelp"
                                        name="meta"
                                        value={metaTitle}
                                        onChange={(e) => setmetaTitle(e.target.value)}

                                    />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Enter Metakeyword
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Metakeyword"
                                        aria-describedby="emailHelp"
                                        name="metakeyword"
                                        value={metaKeyword}
                                        onChange={(e) => setmetaKeyword(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Enter Meta Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Meta Description"
                                        aria-describedby="emailHelp"
                                        name="metadiscripation"
                                        value={metaDescription}
                                        onChange={(e) => setmetaDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="image"
                                        // value={image}
                                        onChange={(e) => setimage(e.target.files[0])}
                                    />
                                </div>
                                <div className="mb-3 col-md-12 mt-2">
                                    <label htmlFor="">Discription</label>
                                    <JoditEditor
                                        ref={editor}
                                        name="content"
                                        value={description}
                                        tabIndex={1}
                                        onChange={content => setdescription(content)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 d-grid gap-2">
                                <button className="btn btn-dark" type="submit">UPLOAD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EditBlog;
