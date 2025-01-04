import React, { useState } from "react";
import { addTask } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddTask = ({ tasks, setTasks }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setMessage("Title is required!");
      return;
    }
    const newTask = { title, completed: false };
    await addTask(newTask, tasks, setTasks); 
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Task
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Task
          </button>
          {message && (
            <p className="text-center text-sm font-medium text-green-600 mt-4">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
