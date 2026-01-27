import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  // fetch from the local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // save in the local storage

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      todoMsg: input,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, todoMsg: newText} : todo,))
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <div className="app-container">
        <div className="stats-card">
          <div className="stats-text">
            <h2>Todo Done</h2>
            <p>keep it up</p>
          </div>
          <div className="stats-count">
            {completedCount}/{todos.length}
          </div>
        </div>
        <TodoInput
          input={input}
          onChange={(e) => setInput(e.target.value)}
          onAdd={addTodo}
        />
        <TodoList items={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit = {editTodo} />
      </div>
    </>
  );
}

export default App;
