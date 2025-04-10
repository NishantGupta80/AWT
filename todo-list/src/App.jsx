import { useReducer, useState } from "react";


function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: task });
      setTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 p-2 border border-amber-400 rounded-md"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 mb-2 rounded shadow"
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
              className="px-2 py-1 text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
