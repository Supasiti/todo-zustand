import { select, useTodoStore } from '@/stores/useTodoStore';

const ClearTodoButton = () => {
  const clearDone = useTodoStore(select.clearDone);

  return (
    <button
      className="rounded border border-slate-400 px-4 py-2 uppercase"
      onClick={clearDone}
    >
      Clear all completed tasks
    </button>
  );
};

export default ClearTodoButton;
