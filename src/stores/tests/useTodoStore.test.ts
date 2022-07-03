import { useTodoStore } from '../useTodoStore';

const initialState = useTodoStore.getState();

beforeEach(() => {
  //clean up
  useTodoStore.setState(initialState);
});

describe('useTodoStore - add task', () => {
  it('should add task to empty todos', () => {
    const store = useTodoStore.getState();
    const newTask = 'refactor my code';
    const expected = [{ id: 1, task: 'refactor my code', done: false }];

    store.addTask(newTask);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });

  it('should increment task id', () => {
    const baseState = {
      ...initialState,
      todos: [{ id: 1, task: 'refactor my code', done: false }],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const newTask = 'add more tests';
    const expected = [
      { id: 1, task: 'refactor my code', done: false },
      { id: 2, task: 'add more tests', done: false },
    ];

    store.addTask(newTask);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });
});

describe('useTodoStore - updateTask', () => {
  it('should update task', () => {
    const baseState = {
      ...initialState,
      todos: [
        { id: 1, task: 'refactor my code', done: false },
        { id: 2, task: 'add more tests', done: false },
      ],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const newTodo = { id: 2, task: 'add way more tests', done: false };
    const expected = [
      { id: 1, task: 'refactor my code', done: false },
      { id: 2, task: 'add way more tests', done: false },
    ];

    store.updateTask(newTodo);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });

  it('should not update anything if it cannot find id', () => {
    const baseState = {
      ...initialState,
      todos: [
        { id: 1, task: 'refactor my code', done: false },
        { id: 2, task: 'add more tests', done: false },
      ],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const newTodo = { id: 4, task: 'add way more tests', done: false };
    const expected = [
      { id: 1, task: 'refactor my code', done: false },
      { id: 2, task: 'add more tests', done: false },
    ];

    store.updateTask(newTodo);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });
});

describe('useTodoStore - toggleDone', () => {
  it('should toggle done', () => {
    const baseState = {
      ...initialState,
      todos: [
        { id: 1, task: 'refactor my code', done: false },
        { id: 2, task: 'add more tests', done: false },
      ],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const expected = [
      { id: 1, task: 'refactor my code', done: false },
      { id: 2, task: 'add more tests', done: true },
    ];

    store.toggleDone(2);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });

  it('should not update anything if it cannot find id', () => {
    const baseState = {
      ...initialState,
      todos: [
        { id: 1, task: 'refactor my code', done: false },
        { id: 2, task: 'add more tests', done: false },
      ],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const expected = [
      { id: 1, task: 'refactor my code', done: false },
      { id: 2, task: 'add more tests', done: false },
    ];

    store.toggleDone(4);

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });
});

describe('useTodoStore - clearDone', () => {
  it('should remove all completed tasks', () => {
    const baseState = {
      ...initialState,
      todos: [
        { id: 1, task: 'refactor my code', done: false },
        { id: 2, task: 'add more tests', done: true },
        { id: 3, task: 'add even more tests', done: true },
      ],
    };
    useTodoStore.setState(baseState);
    const store = useTodoStore.getState();
    const expected = [{ id: 1, task: 'refactor my code', done: false }];

    store.clearDone();

    const todos = useTodoStore.getState().todos;

    expect(todos).toMatchObject(expected);
  });
});
