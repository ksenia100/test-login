import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';
import { useAuth } from '@/shared/hooks/useAuth';

jest.mock('../core/utils/auth', () => ({
  useAuth: jest.fn(() => ({
    signIn: jest.fn(),
    signOut: jest.fn(),
    isLogged: jest.fn(() => true),
  })),
}));

test('renders login form correctly', () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  expect(screen.getByText(/login/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});

test('calls signIn function on form submission', () => {
  const mockSignIn = jest.fn();
  (useAuth as jest.Mock).mockImplementation(() => ({
    signIn: mockSignIn,
    signOut: jest.fn(),
    isLogged: jest.fn(() => false),
  }));

  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

  expect(mockSignIn).toHaveBeenCalledWith('testuser', 'testpassword');
});
