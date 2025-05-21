import React, { useState } from "react";
import useTaskStore from "../store/taskStore";

function Task({ task }) {
  const { updateTask, deleteTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);

  const saveEdit = () => {
    updateTask({ ...task, title, desc });
    setIsEditing(false);
  };

  return (
    <div className="border rounded p-4 bg-gray-50 shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1 w-full mb-2 rounded"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border p-1 w-full mb-2 rounded"
          ></textarea>
          <button onClick={saveEdit} className="mr-2 text-green-600">Save</button>
          <button onClick={() => setIsEditing(false)} className="text-gray-500">Cancel</button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm text-gray-700 mb-2">{task.desc}</p>
          <div className="flex space-x-4 items-center text-sm">
            <button onClick={() => updateTask({ ...task, likes: task.likes + 1 })}>👍 {task.likes}</button>
            <button onClick={() => updateTask({ ...task, dislikes: task.dislikes + 1 })}>👎 {task.dislikes}</button>
            <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
