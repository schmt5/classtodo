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
          Aufträge
        </h1>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <Todos
          id={id}
          title={currentTodo.title}
          description={currentTodo.description}
          todoItems={currentTodo.todoItems}
          link={currentTodo.link}
        />
      </div>
    </div>
  );
};

export default TodosDemo;
