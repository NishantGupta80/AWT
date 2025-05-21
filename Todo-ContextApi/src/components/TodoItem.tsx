import { Todo, useTodo } from '../context/TodoContext';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { dispatch } = useTodo();

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg mb-2 bg-white">
      <div
        className={`flex-1 cursor-pointer ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      >
        {todo.text}
      </div>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
}
