"use client";
import { todo } from "node:test";
import React, { useState } from "react";

const Todo = () => {
  var key = 1;
  const [todos, setTodos] = useState([
    { id: key++, value: "Make the bed" },
    { id: key++, value: "Clean the Kitchen" },
  ]);

  const [inputValue, setInputValue] = useState("test");
  const handleInputChange = (event: any) => {
    console.log("Inside handleInputChange");
    setInputValue(event.target.value);
  };

  const addTodos = (item: string) => {
    const todoObject = { id: key++, value: item };
    setTodos([...todos, todoObject]);
  };

  const removeFromTodos = (id: any) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-2xl">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="w-full shadow rounded p-2 text-grey-darker mr-2"
              id="input"
              placeholder="Todo text"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <button
              className="flex-no-shrink rounded shadow p-2 border-2 border-teal-400 hover:text-white hover:bg-teal-500"
              type="button"
              onClick={() => addTodos(inputValue)}
            >
              Add
            </button>
          </div>
          {todos.map((item) => (
            <div className="flex mt-4" key={key++}>
              <p className="w-full">{item.value}</p>
              <button
                className="flex-no-shrink rounded shadow border-2 p-2 border-red-400 hover:bg-red-500"
                onClick={() => removeFromTodos(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
