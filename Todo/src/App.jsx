import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import EditTask from "./Pages/EditTask";

function App() {
  const [tasks, setTasks] = useState([]); 

  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">
            <Link to="/" className="hover:text-gray-200">
              Task Manager
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-200 transition duration-300">
              Home
            </Link>
            <Link to="/add" className="hover:text-gray-200 transition duration-300">
              Add Task
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
