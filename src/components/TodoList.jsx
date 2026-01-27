import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onDelete, onToggle, onEdit }) {
 if (items.length === 0) {
   return <p className="empty-text">No Todos Yet!</p>;
 }
  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          onEdit={(newText) => onEdit(todo.id, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
