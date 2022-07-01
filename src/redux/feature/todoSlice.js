import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ title: "sssss" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoAct: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodoAct: (state, action) => {
            console.log(state);
            state.todos = state.todos.
                filter((item, index) => {
                    return index !== action.payload
                })
            
        }

    }
})
export const { addTodoAct, deleteTodoAct } = todoSlice.actions