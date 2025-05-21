import React, { useState } from "react";
import Task from "./components/Task";
import useTaskStore from "./store/taskStore";
import { v4 as uuidv4 } from "uuid";

function App() {
  const { tasks, addTask } = useTaskStore();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: uuidv4(), title, desc, likes: 0, dislikes: 0 });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-4 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full mb-2 rounded"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full mb-2 rounded"
        ></textarea>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
        <div className="mt-6 space-y-4">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
