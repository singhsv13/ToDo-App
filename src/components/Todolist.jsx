import React, { useState } from "react";
import Task from "./Task";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), name: input, completed: false }]);
      setInput("");
    }
  };

  const handleDelete = (taskId) => {
    const updatedTodos = todos.filter((task) => task.id !== taskId);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTodos = todos.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-slate-700 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <h2 className="font-bold text-4xl text-center p-2 text-white">
          To-Do List
        </h2>
        <div className="p-4 bg-slate-700 rounded-lg">
          <label
            htmlFor="task"
            className="block mt-2 text-md font-semibold text-white text-left"
          >
            Add your To-Do's here👇🏻
          </label>
          <div className="flex mt-1">
            <input
              placeholder="like studying..."
              type="text"
              onChange={handleChange}
              value={input}
              className="flex-1 border py-2 px-4 rounded-l-lg focus:outline-none"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border-none rounded-r-lg"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="mt-2 w-full">
          {todos.map((task) => (
            <Task
              key={task.id}
              myTask={task}
              onDelete={() => handleDelete(task.id)}
              onToggleComplete={() => handleToggleComplete(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
