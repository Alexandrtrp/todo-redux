import React, { useState } from "react";
import { addTodo } from "../store/todoSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

const InputField = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div className="inputField">
      <input
        className="todoiInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Какая-то задача"
      />
      <button
        className="button"
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default InputField;
