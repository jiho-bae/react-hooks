import React, { useState } from "react";
import Add from "./Add";
import { ADD, DEL, COMPLETE, UNCOMPLETE } from "./actions";

function App() {
  return (
    <>
      <Add />
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </button>
            <button
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              😊✅
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <button
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  😡
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
