import React from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import { todos } from "../Reducers/Todos"
import styled from "styled-components"

export const Header = () => {
    const dispatch = useDispatch()
    const allTodos = useSelector(store => store.todos.items)
    const numberOfTodos = useSelector(store => store.todos.items.length)
    const completedTodos = allTodos.filter(todo => todo.completed === true)
    const handleClearTodos = () => {
        dispatch(todos.actions.removeAll())
    }

  return (
      <Header>
        <Left>
          <Text>Todo</Text>
          <Text>{moment().format("MMMM Do")}</Text>  
        </Left> 
        <Right>
          <Text>{completedTodos.length}/{numberOfTodos}</Text>
          <Button onClick={handleClearTodos}>Remove all</Button>
        </Right>  
      </Header>
  )
}

const Left = styled.section``
const Text = styled.text``
const Right = styled.section``
const Button = styled.section``