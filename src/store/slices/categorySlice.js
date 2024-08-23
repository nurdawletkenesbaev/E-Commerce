import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categoryLoad: false,
    categories: [],
    categoryError: null
}

export const fetchCategoryData = createAsyncThunk(
    'category/fetchCategoryData',
    async (url) => {
        const res = await axios.get(url)
        return res.data
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryData.pending, (state) => {
            state.categoryLoad = true
        })
            .addCase(fetchCategoryData.fulfilled, (state, action) => {
                state.categoryLoad = false,
                    state.categories = action.payload
            })
            .addCase(fetchCategoryData.rejected, (state) => {
                state.categoryLoad = false
            })
    }
})

export default categorySlice.reducer