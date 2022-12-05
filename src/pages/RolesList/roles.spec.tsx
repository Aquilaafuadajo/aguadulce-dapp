import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RoleList from '.';
import '../../../setupJest.js';

test('table should render, and when button is clicked, modal should open', async () => {
  const promise = Promise.resolve();
  render(<RoleList />);
  expect(screen.getByRole('table')).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /Add New Role/i }));

  expect(
    screen.getByRole('dialog', { name: /Add New Role/i }),
  ).toBeInTheDocument();
  await act(() => promise);
});
