import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  updateTask: (updated) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updated.id ? updated : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));

export default useTaskStore;
