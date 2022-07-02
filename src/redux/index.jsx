import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './feature/todoSlice'
import shopSlice from './feature/shopSlice'


const aaa= todoSlice.reducer
const bbb= shopSlice.reducer
console.log("aaa",aaa);
console.log("bbb",bbb);

export const store = configureStore({
    reducer: {
        aaa,
        bbb
    }

});//store
