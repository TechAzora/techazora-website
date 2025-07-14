import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './Slice/LoginSlice'
import blogSlice from './Slice/BlogSlice'
import ProjectSlice from "./Slice/ProjectSlice";
import contactSlice from "./Slice/contactSlice";
import VerifyDocs from './Slice/VerifyDocSlice';
const rootReducer = combineReducers({
    auth: authSlice,
    blog: blogSlice,
    project: ProjectSlice,
    contact : contactSlice,
    VerifyDocs
})


export default rootReducer;