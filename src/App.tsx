import CreateTodo from '@/components/CreateTodo';
import { select, useTodoStore } from '@/stores/useTodoStore';
import TodoItem from '@/components/TodoItem/TodoItem';
import ClearTodoButton from './components/ClearTodoButton/ClearTodoButton';
import shallow from 'zustand/shallow';

const App = () => {
  const todos = useTodoStore(select.todos, shallow);

  return (
    <div className="w-screen h-screen bg-slate-800 text-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="pt-8">
          <CreateTodo />
          <div className="pt-8 space-y-4">
            <h2 className="text-lg font-bold text-center">To do list</h2>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
            <div className="flex justify-center">
              <ClearTodoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
