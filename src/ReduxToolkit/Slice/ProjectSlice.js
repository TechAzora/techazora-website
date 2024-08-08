import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { get_project_API, create_project_API, get_single_project_API, update_project_API, delete_project_Api } from "../../Api_url";
// create project
export const createproject = createAsyncThunk('createproject/project', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(create_project_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updateproject = createAsyncThunk('updateproject/project', async ({id,data}, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${update_project_API}/${id}`, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get project
export const getproject = createAsyncThunk('getproject/project', async () => {
    try {
        const response = await axios.get(get_project_API);
        return response.data; // Assuming your API response contains a 'projects' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// get single project
export const getsingleproject = createAsyncThunk('getsingleproject/project', async (id) => {
    try {
        const response = await axios.get(`${get_single_project_API}/${id}`);
        return response.data; // Assuming your API response contains a 'projects' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete project
export const deleteprojects = createAsyncThunk('deleteprojects/project', async (deleteprojectId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${delete_project_Api}/${deleteprojectId}`);
        return response.data.message; // Assuming your API response contains a 'projects' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],
        singleProject: {},
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create project
            .addCase(createproject.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createproject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
            })
            .addCase(createproject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //update project
            .addCase(updateproject.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateproject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                // if (state.status === 'succeeded') {
                //     alert(state.message)
                // }
                // state.status = 'idle';

            })
            .addCase(updateproject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //getprojects
            .addCase(getproject.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getproject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projects = action.payload;
            })
            .addCase(getproject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //getsingleprojects
            .addCase(getsingleproject.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getsingleproject.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProject = action.payload;
            })
            .addCase(getsingleproject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //delete projects
            .addCase(deleteprojects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteprojects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projects.projects = state.projects.projects.filter(project => project._id !== action.payload);
                state.status = 'idle';
            })

            .addCase(deleteprojects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default projectSlice.reducer;
