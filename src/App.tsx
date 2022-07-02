import { ChangeEvent, MouseEvent, useState } from 'react';
import { select, useTodoStore } from './useTodoStore';

const CreateTodo = () => {
  const [task, setTask] = useState<string>('');
  const addTask = useTodoStore(select.addTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTask = e.target.value;
    setTask(newTask);
  };

  const handleSubmit = (_e: MouseEvent<HTMLButtonElement>) => {
    addTask(task);
  };

  return (
    <div className="flex justify-center ">
      <input
        className="rounded border border-slate-200 p-2 bg-slate-800 mr-2 w-80"
        value={task}
        onChange={handleChange}
      />
      <button
        className="rounded border border-slate-200 px-4 py-2 uppercase"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </div>
  );
};

const App = () => {
  const todos = useTodoStore(select.todos);

  console.log(todos)
  return (
    <div className="w-screen h-screen bg-slate-800 text-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="pt-8">
          <CreateTodo />
          <div className="pt-8">
            {todos.map((todo) => (
              <div key={todo.id}>{todo.task}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
