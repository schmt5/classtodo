import { useLocalStorage } from "usehooks-ts";

const Todos = ({ id, title = "", description = "", todoItems = [] }) => {
  // Use local storage to persist todo completion state
  const [completedTodos, setCompletedTodos] = useLocalStorage(
    `todos-${id}`,
    {},
  );

  const handleToggleTodo = (todoId) => {
    setCompletedTodos((prev) => ({
      ...prev,
      [todoId]: !prev[todoId],
    }));
  };

  return (
    <div className="todos-container">
      <h1 className="todos-title">{title}</h1>
      <p className="todos-description">{description}</p>

      <div className="todos-list">
        {todoItems.map((todo, index) => {
          const todoId = `${id || title}-${index}`; // Create unique ID
          const isCompleted = completedTodos[todoId] || false;

          return (
            <div key={todoId} className="todo-item">
              <label className="todo-label">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => handleToggleTodo(todoId)}
                  className="todo-checkbox"
                />
                <span className={`todo-text ${isCompleted ? "completed" : ""}`}>
                  {todo}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
