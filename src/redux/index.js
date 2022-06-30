import { type } from '@testing-library/user-event/dist/type';
import { createStore } from 'redux';

// Action
export const addTodoAct = (payload) => {
    return {
        type: 'ADD_TODO',
        payload
    }
}
export const deletTodoAct = (payload) => {
    return {
        type: 'DELETE_TODO',
        payload
    }
}

const initialState = {
    todos: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state, todos: [...state.todos.filter((item, index) => {
                    return index !== action.payload
                })]
            }

        default:
            break;
    }
    console.log(state)
    return state;
}//reducer

export const store = createStore(
    rootReducer
);//store


