import create from 'zustand';

export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
  addTask: (task: string) => void;
  updateTask: (todo: Todo) => void;
  toggleDone: (id: number) => void;
  clearDone: () => void;
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
  updateTask: (todo: Todo) => {
    const newTodos = get().todos.map((t) => (t.id === todo.id ? todo : t));
    set((_state) => ({ todos: newTodos }));
  },
  toggleDone: (id: number) => {
    const newTodos = get().todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t,
    );
    set((_state) => ({ todos: newTodos }));
  },
  clearDone: () => {
    set((state) => ({ todos: state.todos.filter((t) => !t.done) }));
  },
}));

export const select = {
  todos: (state: TodoState) => state.todos,
  addTask: (state: TodoState) => state.addTask,
  updateTask: (state: TodoState) => state.updateTask,
  toggleDone: (state: TodoState) => state.toggleDone,
  clearDone: (state: TodoState) => state.clearDone,
};
