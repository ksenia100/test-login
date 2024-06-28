import { signIn, signOut, isAuthenticated } from "./auth";

test('signIn function sets isAuthenticated in localStorage', async () => {
  await signIn('testuser', 'testpassword');

  expect(localStorage.getItem('isAuthenticated')).toBe('true');
});

test('signOut function removes isAuthenticated from localStorage', async () => {
  localStorage.setItem('isAuthenticated', 'true');
  await signOut();

  expect(localStorage.getItem('isAuthenticated')).toBeNull();
});

test('isLogged function returns correct authentication status', () => {
  localStorage.setItem('isAuthenticated', 'true');
  expect(isAuthenticated()).toBeTruthy();

  localStorage.removeItem('isAuthenticated');
  expect(isAuthenticated()).toBeFalsy();
});
