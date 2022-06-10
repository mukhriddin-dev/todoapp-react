import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  console.log(todos);
  const addTodos = (e) => {
    if (e.key === "Enter") {
      const item = {
        id: new Date().getTime(),
        title: text,
      };

      setTodos([item, ...todos]);
      setText("");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card mx-auto w-50 p-4 mt-5 ">
            <h5 className="text-center text-primary fw-bold m-2">TODO APP</h5>

            <input
              type="text"
              className="form-control"
              value={text}
              placeholder="Enter your text..."
              onChange={(e) => setText(e.target.value)}
              onKeyPress={addTodos}
            />
          </div>
        </div>
        <div className="row">
          <div className="card w-50 p-4 mt-5 d-block mx-auto">
            <ul>
              {todos.map((todo) => (
                <li className="m-2 p-3">
                  <span>{todo.title}</span>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setTodos(todos.filter((todos) => todos.id !== todo.id));
                    }}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
