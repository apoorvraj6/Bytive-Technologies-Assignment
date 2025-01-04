import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../services/api";

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    
    const currentTask = tasks.find((task) => task.id === Number(id));
    if (currentTask) {
      setTask(currentTask);
      setTitle(currentTask.title);
      setStatus(currentTask.completed);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setMessage("Title is required!");
      return;
    }

    
    const updatedTasks = tasks.map((t) =>
      t.id === Number(id) ? { ...t, title, completed: status } : t
    );
    setTasks(updatedTasks);

    navigate("/"); 
  };

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">
          Task not found!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Task
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="status"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="status"
              className="text-sm font-medium text-gray-700"
            >
              Mark as Completed
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Task
          </button>
          {message && (
            <p className="text-center text-sm font-medium text-red-600 mt-4">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditTask;
