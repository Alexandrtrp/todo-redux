import "./App.css";
import React from "react";
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";

export const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField />
      <TodoList />
    </div>
  );
};
