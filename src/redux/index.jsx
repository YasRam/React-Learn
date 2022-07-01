// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './config';
import { todoSlice } from './feature/todoSlice'




console.log(todoSlice)

// export const store = createStore(rootReducer);//store
export const store = configureStore({
    reducer: todoSlice.reducer
});//store


