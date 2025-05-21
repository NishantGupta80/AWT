import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet.</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
