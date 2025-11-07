import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Aufgaben</h1>
        <p>
          Verwalten Sie Ihre Kursaufgaben und verfolgen Sie Ihren Fortschritt
        </p>
      </header>

      <main>
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e3e3e3",
            borderRadius: "4px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 1rem 0",
              color: "#2e2e2e",
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            Willkommen
          </h2>
          <p style={{ color: "#6b6b6b", margin: 0 }}>
            Navigieren Sie zu einer spezifischen Aufgaben-ID um loszulegen.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
