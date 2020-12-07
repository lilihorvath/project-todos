import React from "react"
import styled from "styled-components"
import { Provider } from "react-redux"
import { createStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from "./Components/Header"
import { TodoInput } from "./Components/TodoInput"
import { TodoItem } from "./Components/TodoItem"
import { TodoList } from "./Components/TodoList"
import { Animation } from "./Components/Animation"

import { todos } from "./Reducers/Todos"

const reducer = combineReducers ({ todos: todos.reducer })

const persistedStateJSON = localStorage.getItem('reduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})

export const App = () => {
    return (
        <Provider store={store}>
          <TodoContainer>
            <Header/>
            <TodoInput/>
            <TodoItem/>
            <TodoList/>
            <Animation/>
          </TodoContainer>
        </Provider>
    )
}

const TodoContainer = styled.main``