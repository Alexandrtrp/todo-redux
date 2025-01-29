import React, { useState } from "react";
import TodoItem from "./TodoItem.tsx";
import { deleteCompletedTodo, TTodo } from "../store/todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState('All')
  const todosToRender = () => {
    let newTodos:Array<TTodo> = [];
    
    switch (filter) {
      case "Active":
        newTodos = todos.filter((todo) => todo.completed === false);
        console.log(newTodos);
        return newTodos;
      case "Completed":
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  
  };
  return (
    <div className="todoList">
      <h2>Список задач</h2>
      <ul className="todos">
        {todosToRender().map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <div className="buttonWrapper">
        <button className="button" onClick={() => setFilter('All')}>All</button>
        <button className="button" onClick={() => setFilter("Active")}>Active</button>
        <button className="button" onClick={() => setFilter("Completed")}>Completed</button>
      </div>
      <button onClick={()=>dispatch(deleteCompletedTodo())} className="button">Delete Completed</button>
    </div>
  );
};

export default TodoList;
