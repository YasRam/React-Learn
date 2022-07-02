import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from "../../componant/todo/TodoForm";
import TodoList from "../../componant/todo/TodoList";
import './Todo.css';
import { addTodoAct, deleteTodoAct } from "../../redux/feature/todoSlice";

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const addTodoFun = (task) => {
    dispatch(addTodoAct(task));
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAct(index)); 
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodoFun} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;