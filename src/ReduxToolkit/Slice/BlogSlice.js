import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_BLOG_API, CREATE_BLOG_API ,GET_SINGLE_BLOG_API,UPDATE_BLOG_API,} from "../../Api_url";
// create blog
export const createBlog = createAsyncThunk('createBlog/blog', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(CREATE_BLOG_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updateBlog = createAsyncThunk('updateBlog/blog', async ({formData,id}, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${UPDATE_BLOG_API}/${id}`, formData)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get blog
export const getBlog = createAsyncThunk('getblog/blog', async () => {
    try {
        const response = await axios.get(GET_BLOG_API);
        return response.data; // Assuming your API response contains a 'blogs' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// get single blog
export const getsingleBlog = createAsyncThunk('getsingleBlog/blog', async (id) => {
    try {
        const response = await axios.get(`${GET_SINGLE_BLOG_API}/${id}`);
        return response.data; // Assuming your API response contains a 'blogs' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete blog
export const deleteBlogs = createAsyncThunk('deleteBlogs/blog', async (deleteBlogId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${GET_SINGLE_BLOG_API}/${deleteBlogId}`);
        return response.data.message; // Assuming your API response contains a 'blogs' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        singleBlogs:{},
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create blog
            .addCase(createBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(createBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //update blog
            .addCase(updateBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                // if (state.status === 'succeeded') {
                //     alert(state.message)
                // }
                // state.status = 'idle';

            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //getblogs
            .addCase(getBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //getsingleblogs
            .addCase(getsingleBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getsingleBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleBlogs = action.payload;
            })
            .addCase(getsingleBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //delete blogs
            .addCase(deleteBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs.blogs = state.blogs.blogs.filter(blogs => blogs._id !== action.payload);
                state.status = 'idle'
            })
            .addCase(deleteBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default blogSlice.reducer;
