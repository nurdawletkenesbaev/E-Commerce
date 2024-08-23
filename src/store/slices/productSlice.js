import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products: [],
    productLoad: false,
    productError: null
}

export const fetchProductData = createAsyncThunk(
    'product/fetchProductData',
    async (url) => {
        const res = await axios.get(url)
        return res.data
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.productLoad = true
        })
            .addCase(fetchProductData.fulfilled, (state, action) => {
                state.productLoad = false,
                    state.products = action.payload
            })
            .addCase(fetchProductData.rejected, (state) => {
                state.productLoad = false
            })
    }
})

export default productSlice.reducer