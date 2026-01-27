import { useState } from "react";
import React from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todoMsg);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-left">
        <span className="status-dot"></span>
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
            {todo.todoMsg}
          </span>
        )}
      </div>

      <div className="todo-actions">
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        {!isEditing && (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            ✏️
          </button>
        )}
        <button className="delete-btn" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
