import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from './useAuth';

test('useAuth hook initializes correctly', () => {
  const { result } = renderHook(() => useAuth());

  expect(result.current.isLogged()).toBeFalsy();

  act(() => {
    result.current.signIn('testuser', 'testpassword');
  });

  expect(result.current.isLogged()).toBeTruthy();

  act(() => {
    result.current.signOut();
  });

  expect(result.current.isLogged()).toBeFalsy();
});
