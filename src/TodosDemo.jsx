import React from "react";
import { useParams } from "react-router";
import Todos from "./Todos";
import { todoData } from "./todoData";

const TodosDemo = () => {
  const { id } = useParams();

  // Get the current todo list or default
  const currentTodo = todoData[id] || {
    title: "Unbekannte Aufgabe",
    description: `Keine Aufgaben für ID "${id}" gefunden.`,
    todoItems: [],
  };

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <div
        style={{
          padding: "3rem 2rem 2rem 2rem",
          borderBottom: "1px solid #e9ecef",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            margin: "0 0 0.5rem 0",
            color: "#2e2e2e",
            fontWeight: "600",
          }}
        >
          Aufgaben
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#6b6b6b",
            margin: "0",
          }}
        >
          {currentTodo.description}
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <Todos
          id={id}
          title={currentTodo.title}
          description={currentTodo.description}
          todoItems={currentTodo.todoItems}
        />
      </div>
    </div>
  );
};

export default TodosDemo;
