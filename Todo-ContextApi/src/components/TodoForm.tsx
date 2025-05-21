import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded-lg"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add
      </button>
    </form>
  );
}
