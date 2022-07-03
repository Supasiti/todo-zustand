import { select, Todo, useTodoStore } from '@/stores/useTodoStore';
import { ChangeEvent, memo, useState } from 'react';

export interface ITodoItemProps {
  todo: Todo;
}

const TodoItem = (props: ITodoItemProps) => {
  const { todo } = props;
  const [task, setTask] = useState<string>(todo.task);
  const updateTask = useTodoStore(select.updateTask);
  const toggleDone = useTodoStore(select.toggleDone);

  const changeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    const newTodo = { ...todo, task };
    updateTask(newTodo);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <input
        className="appearance-none w-5 h-5 rounded-md border border-slate-400 bg-slate-800 checked:bg-orange-500 "
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      <input
        className="w-96 p-2 bg-slate-800 border border-slate-400 rounded"
        type="text"
        value={task}
        onChange={changeTask}
      />
      <button
        className="py-2 px-4 bg-slate-800 border border-slate-400 rounded uppercase"
        onClick={handleClick}
      >
        update task
      </button>
    </div>
  );
};

export default memo(TodoItem);
