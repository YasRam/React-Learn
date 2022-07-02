import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://fakestoreapi.com/products'
const initialState = {
    product: [],
    loading: false
}

export const getProductElements = createAsyncThunk('shop/getProductElements', () => {
    return fetch(baseURL)
        .then(res => res.json())
        .then((json) => json)
        .catch(err => console.log(err))
})

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addProductAct: () => {
            console.log("product adding ...")
        }
    },
    extraReducer: {
        [getProductElements.pending]: (state, action) => {
            state.loading = true
            
            console.log('pending', action)
            
        },

        [getProductElements.fulfilled]: (state, action) => {
            state.product = action.payload
            state.loading = true
            console.log('fulfilled', action)
        },

        [getProductElements.rejected]: (state, action) => {
            state.loading = false
            state.err = action.payload
            console.log('rejected', action)
        },
    }
})
console.log(shopSlice)
export const { addProductAct } = shopSlice.actions
export default shopSlice