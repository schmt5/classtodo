import React from "react";
import { useParams } from "react-router";
import Todos from "./Todos";

const TodosDemo = () => {
  const { id } = useParams();

  // Define different todo lists based on ID
  const todoData = {
    "word-formatting": {
      title: "Woche 5: Formatierung in Word",
      description:
        "Alle Aufträge finden Sie in Teams unter 'Allgemein > Dateien > Woche 5'",
      todoItems: [
        "Erstellen Sie ein neues Word-Dokument",
        "Fügen Sie eine Überschrift mit Formatvorlage 'Titel' hinzu",
        "Schreiben Sie drei Absätze Text",
        "Formatieren Sie den ersten Absatz mit Fettdruck",
        "Fügen Sie eine nummerierte Liste mit 5 Punkten hinzu",
        "Erstellen Sie eine Tabelle mit 3 Spalten und 4 Zeilen",
        "Fügen Sie Seitenzahlen in der Fußzeile hinzu",
        "Speichern Sie das Dokument als 'Übung_Woche5.docx'",
      ],
    },
    "excel-basics": {
      title: "Woche 6: Excel Grundlagen",
      description:
        "Übungen zur Tabellenkalkulation - Deadline: Freitag 23:59 Uhr",
      todoItems: [
        "Öffnen Sie eine neue Excel-Arbeitsmappe",
        "Erstellen Sie eine Tabelle mit Studentennamen und Noten",
        "Berechnen Sie den Durchschnitt mit der MITTELWERT-Funktion",
        "Formatieren Sie die Zahlen als Prozent",
        "Erstellen Sie ein Säulendiagramm aus den Daten",
        "Fügen Sie dem Diagramm einen Titel hinzu",
      ],
    },
    "powerpoint-presentation": {
      title: "Woche 7: PowerPoint Präsentationen",
      description: "Erstellen Sie eine Präsentation zu Ihrem gewählten Thema",
      todoItems: [
        "Erstellen Sie eine neue PowerPoint-Präsentation",
        "Wählen Sie ein professionelles Design",
        "Fügen Sie eine Titelfolie hinzu",
        "Erstellen Sie 5 Inhaltsfolien",
        "Fügen Sie Bilder und Grafiken hinzu",
        "Verwenden Sie Animationen für Aufzählungen",
        "Fügen Sie Folienübergänge hinzu",
        "Speichern Sie als PDF für die Abgabe",
      ],
    },
    homework: {
      title: "Hausaufgaben für diese Woche",
      description: "Bereiten Sie sich auf die nächste Stunde vor",
      todoItems: [
        "Kapitel 3 im Lehrbuch lesen",
        "Übungen 1-5 auf Seite 47 lösen",
        "Video-Tutorial über Formatvorlagen ansehen",
        "Notizen zusammenfassen",
      ],
    },
    "web-development": {
      title: "Woche 8: Webentwicklung Grundlagen",
      description: "Einführung in HTML, CSS und JavaScript",
      todoItems: [
        "Erstellen Sie eine HTML-Datei mit grundlegender Struktur",
        "Fügen Sie CSS-Styling hinzu",
        "Implementieren Sie ein einfaches JavaScript-Formular",
        "Testen Sie die Website in verschiedenen Browsern",
        "Laden Sie das Projekt auf GitHub hoch",
      ],
    },
  };

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
