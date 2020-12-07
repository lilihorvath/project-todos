import { createSlice } from "@reduxjs/toolkit"

const todoData = [
    { id: 1, text: "Bake a lot of cookie", complete: true, createdAt: "an hour ago"},
    { id: 2, text: "Eat all cookies", completed: false, createdAt: "half an hour ago"}
]

const initialState = {
    items: todoData
}

export const todos = createSlice({
    name: "todos",
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ id: Date.now(), text: action.payload, completed: false})
        },

        removeTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload)
        },

        toggleTodo: (state, action) => {
            const foundTodo = state.items.find((todo) => todo.id === action.payload)
            if (foundTodo) {
                foundTodo.completed = !foundTodo.completed
            }
        },

        removeAll: (state) => {
            state.items = []
        }
    }
})
