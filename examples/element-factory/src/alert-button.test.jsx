import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {
    render(<AlertButton />);
    const button = screen.getByRole('button', { name: /trigger alert/i });

    expect(button).toBeInTheDocument();
  });

  it('should trigger an alert', async () => {
    const onSubmit = vi.fn(() => {});

    render(
      <AlertButton onSubmit={onSubmit} defaultMessage={'Default Message'} />,
    );

    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith('Hello');
  });
});
