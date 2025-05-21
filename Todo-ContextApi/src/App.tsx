import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
