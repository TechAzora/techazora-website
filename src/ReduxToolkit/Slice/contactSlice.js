import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { get_contact_API, create_contact_API, update_contact_API, delete_contact_Api } from "../../Api_url";
// create contact
export const createcontact = createAsyncThunk('createcontact/contact', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(create_contact_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updatecontact = createAsyncThunk('updatecontact/contact', async ({ formData, id }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${update_contact_API}/${id}`, formData)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get contact
export const getcontact = createAsyncThunk('getcontact/contact', async () => {
    try {
        const response = await axios.get(get_contact_API);
        return response.data; // Assuming your API response contains a 'contacts' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete contact
export const deletecontacts = createAsyncThunk('deletecontacts/contact', async (deletecontactId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${delete_contact_Api}/${deletecontactId}`);
        return response.data.message; // Assuming your API response contains a 'contacts' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [],
        singlecontact: {},
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create contact
            .addCase(createcontact.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createcontact.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
            })
            .addCase(createcontact.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //update contact
            .addCase(updatecontact.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatecontact.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                // if (state.status === 'succeeded') {
                //     alert(state.message)
                // }
                // state.status = 'idle';

            })
            .addCase(updatecontact.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //getcontacts
            .addCase(getcontact.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getcontact.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contacts = action.payload;
            })
            .addCase(getcontact.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deletecontacts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contacts = state.contacts.filter(contact => contact._id !== action.payload);
                state.status = 'idle';
            })

            .addCase(deletecontacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default contactSlice.reducer;
