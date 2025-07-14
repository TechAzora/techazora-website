import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { get_VerifyDocs_API, create_VerifyDocs_API, get_single_VerifyDocs_API, update_VerifyDocs_API, delete_VerifyDocs_Api ,verifyducumentByIdAPi} from "../../Api_url";
// create VerifyDocs
export const createVerifyDocs = createAsyncThunk('createVerifyDocs/VerifyDocs', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(create_VerifyDocs_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// create VerifyDocs
export const verifyDocumentById = createAsyncThunk('verifyDocumentById/VerifyDocs', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(verifyducumentByIdAPi, data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updateVerifyDocs = createAsyncThunk('updateVerifyDocs/VerifyDocs', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${update_VerifyDocs_API}/${id}`, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get VerifyDocs
export const getVerifyDocs = createAsyncThunk('getVerifyDocs/VerifyDocs', async () => {
    try {
        const response = await axios.get(get_VerifyDocs_API);
        return response.data; // Assuming your API response contains a 'VerifyDocss' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// get single VerifyDocs
export const getsingleVerifyDocs = createAsyncThunk('getsingleVerifyDocs/VerifyDocs', async (id) => {
    try {
        const response = await axios.get(`${get_single_VerifyDocs_API}/${id}`);
        return response.data; // Assuming your API response contains a 'VerifyDocss' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete VerifyDocs
export const deleteVerifyDocss = createAsyncThunk('deleteVerifyDocss/VerifyDocs', async (deleteVerifyDocsId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${delete_VerifyDocs_Api}/${deleteVerifyDocsId}`);
        return response.data.message; // Assuming your API response contains a 'VerifyDocss' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const VerifyDocsSlice = createSlice({
    name: "VerifyDocs",
    initialState: {
        VerifyDocss: [],
        singleVerifyDocs: {},
        verifiedResult: null,
        status: "idle",
        error: null,
        message: null,
    },
    reducers: {
        clearVerifyMessage: (state) => {
            state.message = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createVerifyDocs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createVerifyDocs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload;
            })
            .addCase(createVerifyDocs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Update
            .addCase(updateVerifyDocs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateVerifyDocs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload;
            })
            .addCase(updateVerifyDocs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Get All
            .addCase(getVerifyDocs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getVerifyDocs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.VerifyDocss = action.payload;
            })
            .addCase(getVerifyDocs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Get Single
            .addCase(getsingleVerifyDocs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getsingleVerifyDocs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.singleVerifyDocs = action.payload;
            })
            .addCase(getsingleVerifyDocs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Delete
            .addCase(deleteVerifyDocss.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteVerifyDocss.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.VerifyDocss = state.VerifyDocss.filter(
                    (doc) => doc._id !== action.payload
                );
            })
            .addCase(deleteVerifyDocss.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // Verify by documentId
            .addCase(verifyDocumentById.pending, (state) => {
                state.status = "loading";
                state.verifiedResult = null;
            })
            .addCase(verifyDocumentById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.verifiedResult = action.payload;
            })
            .addCase(verifyDocumentById.rejected, (state, action) => {
                state.status = "failed";
                state.verifiedResult = { success: false, message: action.payload };
            });
    },
});



export default VerifyDocsSlice.reducer;
