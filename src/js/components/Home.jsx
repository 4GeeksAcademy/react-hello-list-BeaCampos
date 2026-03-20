import React, { useState } from "react";


  const Home = () => {

  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
 
  "Drink coffee ☕",
  "Walk the dog 🐕",
  "Save the world 🌍",
  "Eat pizza 🍕"
]);


  return (
    <div className="container">

      <h1 className="title">todos</h1>

      <div className="todo-container">

        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim() !== "") {
              setTodos([...todos, inputValue]);
              setInputValue("");
            }
          }}
        />

        <ul>

          {todos.map((task, index) => (

            <li key={index} className="task">

              {task}

              <span
                className="delete"
                onClick={() => {
                  const newTodos = todos.filter((_, i) => i !== index);
                  setTodos(newTodos);
                }}
              >
                X
              </span>

            </li>

          ))}

        </ul>

        <div className="counter">
          {todos.length} items left
        </div>

      </div>

    </div>
  );
};

export default Home;