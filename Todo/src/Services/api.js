import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";


export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(-10); 
};


export const addTask = async (newTask, currentTasks, setTasks) => {
  const taskWithId = { id: Math.random(), ...newTask }; 
  setTasks([...currentTasks, taskWithId]); 
  return taskWithId;
};


export const updateTask = async (id, updatedTask) => {
  return { id, ...updatedTask }; 
};
