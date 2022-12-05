import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MemberList from '.';
import '../../../setupJest.js';

test('table should render, and when button is clicked, modal should open', async () => {
  const promise = Promise.resolve();
  render(<MemberList />);
  expect(screen.getByRole('table')).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /Add Member/i }));

  expect(
    screen.getByRole('dialog', { name: /Add Member/i }),
  ).toBeInTheDocument();
  await act(() => promise);
});
