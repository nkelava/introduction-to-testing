import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  it('renders with an initial count of 0', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    render(<Counter />);
    const counterUnit = screen.getByTestId('counter-unit');
    expect(counterUnit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const counter = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const counterUnit = screen.getByTestId('counter-unit');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counterUnit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    render(<Counter initialCount={3} />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const counter = screen.getByTestId('counter-count');

    expect(decrementButton).not.toBeDisabled();

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(counter).toHaveTextContent('2');
  });

  it('does not allow decrementing below 0', async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const counter = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(counter).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const counter = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counter).toHaveTextContent('1');

    await act(async () => {
      await userEvent.click(resetButton);
    });

    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', async () => {
    render(<Counter initialCount={1} />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('updates the document title based on the count', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    await act(async () => {
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
    });

    expect(document.title).toEqual(expect.stringContaining('2 days'));

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(document.title).toEqual(expect.stringContaining('1 day'));
  });
});
