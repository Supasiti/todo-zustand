import create from 'zustand';

export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
  addTask: (task: string) => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  addTask: (task: string) => {
    const currentTodos = get().todos;
    const maxId =
      currentTodos.length > 0
        ? Math.max(...currentTodos.map((todo) => todo.id))
        : 0;
    const newTodo = { id: maxId + 1, task, done: false };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
}));

export const select = {
  todos: (state: TodoState) => state.todos,
  addTask: (state: TodoState) => state.addTask,
};
