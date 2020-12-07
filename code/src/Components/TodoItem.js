import React from "react"
import { useDispatch } from "react-redux"

import { todos } from "../Reducers/Todos"

import styled from "styled-components"

export const TodoItem = ({item}) => {
    const dispatch = useDispatch()

    const handleToggleTodo = () => {
        dispatch(
            todos.actions.toggleTodo({
                todoId: item.id,
                complete: !item.complete
            })
        )
    }

    const handleRemoveTodo = () => {
        dispatch(
            todos.actions.removeTodo({
                todoId: item.id
            })
        )
    }

    return (
        <Main>
            <TodoDiv>
                <CheckBox isChecked={item.complete ? "checked" : ""} onChange={handleToggleTodo}/>
                <TodoText>{item.text}</TodoText>
                <RemoveButton onClick={handleRemoveTodo}>Delete</RemoveButton>
            </TodoDiv>
        </Main>
    )
}

const Main = styled.section`
    width: 100%;
`

const TodoDiv = styled.div``

const CheckBox = styled.button``

const TodoText = styled.text``

const RemoveButton = styled.button``
