import React from "react";
import { toggleTodoComplete, TTodo } from "../store/todoSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

const TodoItem = ({ id, text, completed }: TTodo) => {
  const dispatch = useAppDispatch();
  return (
    <li className="todo" key={id}>
      <input
        className="todoCheckbox"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <span>{text}</span>
    </li>
  );
};

export default TodoItem;
