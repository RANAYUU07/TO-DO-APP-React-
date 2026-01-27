import React from "react";

function TodoInput({ input, onChange, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };
  return (
    <form className="todo-input-wrapper" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="write your task here"
        value={input}
        onChange={onChange}
      />
      <button className="add-btn" type="submit" disabled={input.trim() === ""}>
        +
      </button>
    </form>
  );
}

export default TodoInput;
