import { fireEvent, render, waitFor } from '@testing-library/react';
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not log error', () => {
    const spy = jest.spyOn(global.console, 'error');

    render(<TodoItem {...defaultProps} />);

    expect(spy).not.toBeCalled();
  });

  it('should render with correctly', () => {
    const rendered = render(<TodoItem {...defaultProps} />);

    const checkboxEl = rendered.getByRole('checkbox') as HTMLInputElement;
    const textboxEl = rendered.getByRole('textbox') as HTMLInputElement;

    expect(checkboxEl).toBeInTheDocument();
    expect(checkboxEl.checked).toBe(false);
    expect(textboxEl).toBeInTheDocument();
    expect(textboxEl.value).toEqual('refactor code');
    expect(rendered.getByRole('button')).toBeInTheDocument();
  });

  it('should call toggleDone', async () => {
    const mockToggleDone = jest.fn();
    (useTodoStore as unknown as jest.Mock).mockImplementation((cb) =>
      cb({
        updateTask: jest.fn(),
        toggleDone: mockToggleDone,
      }),
    );
    const rendered = render(<TodoItem {...defaultProps} />);

    fireEvent.click(rendered.getByRole('checkbox'), {
      target: { checked: true },
    });

    await waitFor(() => {
      expect(mockToggleDone).toBeCalledWith(1);
    });
  });

  it('should call updateTask', async () => {
    const mockUpdateTask = jest.fn();
    (useTodoStore as unknown as jest.Mock).mockImplementation((cb) =>
      cb({
        updateTask: mockUpdateTask,
        toggleDone: jest.fn(),
      }),
    );
    const rendered = render(<TodoItem {...defaultProps} />);

    fireEvent.change(rendered.getByRole('textbox'), {
      target: { value: 'clean up' },
    });

    fireEvent.click(rendered.getByRole('button'));

    await waitFor(() => {
      expect(mockUpdateTask).toBeCalledWith({
        id: 1,
        task: 'clean up',
        done: false,
      });
    });
  });
});
