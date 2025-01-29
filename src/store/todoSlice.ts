import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";

type TState = {
  todos: Array<TTodo>;
  completedTodo: Array<string>;
  toggledTodo: TTodo;
};

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState: TState = {
  todos: [
    {
      id: v1(),
      text: "Test todo",
      completed: false,
    },
    {
      id: v1(),
      text: "Test todo2",
      completed: false,
    },
    {
      id: v1(),
      text: "Test todo3",
      completed: false,
    },
  ],
  completedTodo: [],
  toggledTodo: {
    id: "",
    text: "",
    completed: false,
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: v1(),
        text: action.payload,
        completed: false,
      });
    },
    deleteCompletedTodo(state) {
      state.completedTodo.forEach((id) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      });
      state.completedTodo = [];
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      state.toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      )!;
      
      state.toggledTodo.completed = !state.toggledTodo.completed;
      if (state.toggledTodo.completed) state.completedTodo.push(action.payload);
      else
        state.completedTodo = state.completedTodo.filter(
          (el) => el !== action.payload
        );
    },
  },
});

export const { addTodo, toggleTodoComplete, deleteCompletedTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
