import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import SIdemenu from "../SIdemenu";
import { getsingleproject, updateproject } from "../../ReduxToolkit/Slice/ProjectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
function EditProject() {
    const { id } = useParams();
    const nagigate = useNavigate()
    const dispatch = useDispatch()
    const singleProject = useSelector((state) => state.project.singleProject)
    const status = useSelector((state) => state.project.status)
    const error = useSelector((state) => state.project.error)

    const editor = useRef(null);
    const [name, setName] = useState("");
    const [weblink, setWeblink] = useState("");
    const [applink, setApplink] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [Image, setImage] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        dispatch(getsingleproject(id))
    }, [id])
    // 
    useEffect(()=>{
        if (singleProject) {
            setName(singleProject.name)
            setWeblink(singleProject.weblink)
            setApplink(singleProject.applink)
            setThumbnail(singleProject.thumbnail)
            setImage(singleProject.Image)
            setDescription(singleProject.description)
        }
    },[singleProject])
    const onsubmitdata = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("name", name);
            data.append("weblink", weblink);
            data.append("applink", applink);
            data.append("description", description);
            if (thumbnail) {
                data.append("thumbnail", thumbnail);
            }
            if (Image) {
                data.append("Image", Image);
            }
            dispatch(updateproject({ id, data }))
            nagigate("/adminproject")
            setName("");
            setWeblink("");
            setApplink("");
            setThumbnail(null);
            setImage(null);
            setDescription("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="container-fluid" style={{ zindex: "999px" }}>
                <div className="row">
                    <SIdemenu />
                    <div className="col-lg-10 col-7" style={{ height: "100vh", overflowY: "scroll" }}>
                        <div className="row">
                            <div className="background-color-admin py-3 shadow-sm"><h5 className="">Add New Project</h5></div>
                            <form onSubmit={onsubmitdata}>
                                <div className="row py-3 px-1">

                                    <div className="col-md-4 mt-2">
                                        <label htmlFor="projectTitle" className="form-label">
                                            Project Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projectTitle"
                                            placeholder="Project Title"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-4 mt-2">
                                        <label htmlFor="weblink" className="form-label">
                                            Web Link
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="weblink"
                                            placeholder="Enter Web Link"
                                            name="weblink"
                                            value={weblink}
                                            onChange={(e) => setWeblink(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <label htmlFor="applink" className="form-label">
                                            App Link
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="applink"
                                            placeholder="Enter App Link"
                                            name="applink"
                                            value={applink}
                                            onChange={(e) => setApplink(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-2">
                                        <label htmlFor="thumbnail" className="form-label">
                                            Thumbnail
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="thumbnail"
                                            name="thumbnail"
                                            onChange={(e) => setThumbnail(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="Image" className="form-label">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="Image"
                                            name="Image"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="mb-3 col-md-12 mt-2">
                                        <label htmlFor="">Discription</label>
                                        <JoditEditor
                                            ref={editor}
                                            name="content"
                                            value={description}
                                            tabIndex={1}
                                            onChange={content => setDescription(content)}
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
            </div>
        </>
    );

}

export default EditProject;
