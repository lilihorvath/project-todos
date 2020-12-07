import React from "react"
import { useSelector } from "react-redux"

import { TodoItem } from "Components/TodoItem"

import styled from "styled-components"

export const TodoList = () => {
    const allTodos = useSelector((store) => store.todos.items)
    const todosCompleted = allTodos.filter(todo => (todo.completed === true))
    const todosMissing = allTodos.filter(todo => (todo.completed === false))

    return(
        <Container>
            {allTodos.length === 0 &&
                <NothingTodo>You don't have any todos!</NothingTodo>
            }

            {todosMissing.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}

            {todosCompleted.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </Container>
    )
}

const Container = styled.section``

const NothingTodo = styled.text``
