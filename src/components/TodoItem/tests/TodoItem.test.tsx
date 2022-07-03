import { render } from '@testing-library/react';
import TodoItem, { ITodoItemProps } from '../TodoItem';
import { useTodoStore } from '@/stores/useTodoStore';

jest.mock('@/stores/useTodoStore', () => ({
  ...jest.requireActual('@/stores/useTodoStore'),
  useTodoStore: jest.fn(),
}));

describe('<TodoItem />', () => {
  const defaultProps: ITodoItemProps = {
    todo: { id: 1, task: 'refactor code', done: false },
  };

  it('should not log error', () => {
    const spy = jest.spyOn(global.console, 'error');

    render(<TodoItem {...defaultProps} />);

    expect(spy).not.toBeCalled();
  });


});
