import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './feature/todoSlice'
import shopSlice from './feature/shopSlice'

const todoReducer = todoSlice.reducer
const shopReducer = shopSlice.reducer
// console.log("aaa",aaa);
// console.log("bbb",bbb);

export const store = configureStore({
    reducer: todoReducer,shopReducer
    

});//store
