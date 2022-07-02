import { ChangeEvent, MouseEvent, useState } from 'react';
import { select, useTodoStore } from '@/stores/useTodoStore';

const CreateTodo = () => {
  const [task, setTask] = useState<string>('');
  const addTask = useTodoStore(select.addTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTask = e.target.value;
    setTask(newTask);
  };

  const handleSubmit = (_e: MouseEvent<HTMLButtonElement>) => {
    addTask(task);
    setTask('');
  };

  return (
    <div className="flex justify-center ">
      <input
        className="rounded border border-slate-400 p-2 bg-slate-800 mr-2 w-80"
        value={task}
        onChange={handleChange}
      />
      <button
        className="rounded border border-slate-400 px-4 py-2 uppercase"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTodo;
