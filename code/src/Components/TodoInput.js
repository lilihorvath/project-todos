import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todos } from "../Reducers/Todos"
import styled from "styled-components"

export const TodoInput = () => {
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch()

    const addTodo = event => {
        event.preventDefault()
        dispatch(
            todos.actions.addTodo({
                id: Date.now(),
                text: addTodo,
                complete: false,
            }))
        setNewTodo('')
    }

    return(
        <Main>
            <InputForm onSubmit={addTodo}>
                <NewTodo>
                    <Input
                        type="text" 
                        value={newTodo}
                        placeholder= "Open Christmas' presents!"
                        onChange={(event) => setNewTodo(event.tartget.value)}
                        required
                    />
                    <NewTodoButton type="submit" disabled={newTodo.length<5}>+</NewTodoButton>
                </NewTodo>
            </InputForm>
        </Main>
    )
}

const Main = styled.section``

const InputForm = styled.form``

const NewTodo = styled.section``

const Input = styled.form``

const NewTodoButton = styled.button``

