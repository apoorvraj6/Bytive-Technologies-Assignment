import React, { useEffect } from "react";
import { fetchTasks } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = ({ tasks, setTasks }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      if (tasks.length === 0) {
        const data = await fetchTasks();
        setTasks(data);
      }
    };
    getTasks();
  }, [tasks, setTasks]);

  const handleUpdate = (taskId) => {
    navigate(`/edit/${taskId}`); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Task List
        </h1>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
            >
             
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {task.title}
                </h2>
                <p className="text-sm mt-1 font-medium text-gray-700">
                  Status:{" "}
                  <span
                    className={`${
                      task.completed ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {task.completed ? "Completed" : "Incomplete"}
                  </span>
                </p>
              </div>

              
              <button
                onClick={() => handleUpdate(task.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
