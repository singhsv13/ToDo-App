import React, { useState } from "react";

export default function Task({ myTask, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(myTask.name);

  const handleDelete = () => {
    onDelete();
  };

  const handleDone = () => {
    onToggleComplete();
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editedTask.trim() !== "") {
      myTask.name = editedTask;
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full md:max-w-lg mx-auto mb-2">
      <div className="bg-slate-800 rounded-lg p-2 shadow-md">
        <div className="flex items-center justify-between">
          {isEditing ? (
            <div className="w-full">
              <input
                type="text"
                value={editedTask}
                onChange={handleEditChange}
                className="w-full text-white px-3 py-2 border-none rounded-md bg-slate-600 focus:outline-none"
              />
              <div className="flex justify-end mt-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border-none rounded-lg mr-2"
                  onClick={handleEditSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border-none rounded-lg"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center w-full">
              <p
                className={`flex-1 text-white px-2 ${
                  myTask.completed && "line-through"
                }`}
              >
                {myTask.name}
              </p>
              <div className="flex items-center">
                <button
                  className={`m-1 bg-${
                    myTask.completed ? "gray" : "green"
                  }-500 hover:bg-${
                    myTask.completed ? "gray" : "green"
                  }-600 text-white font-semibold py-2 px-4 border-none rounded-lg`}
                  onClick={handleDone}
                >
                  {myTask.completed ? "Undone" : "Done"}
                </button>
                <button
                  className="m-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border-none rounded-lg"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="m-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border-none rounded-lg"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
