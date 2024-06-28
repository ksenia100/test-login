import { BehaviorSubject } from 'rxjs';

export const useAuth = () => {
  const isAuthenticated$ = new BehaviorSubject<boolean>(false);

  const signIn = async (username: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('isAuthenticated', 'true');
        isAuthenticated$.next(true);
        resolve();
      }, 500);
    });
  };

  const signOut = async () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem('isAuthenticated');
        isAuthenticated$.next(false);
        resolve();
      }, 500);
    });
  };

  const isLogged = () => localStorage.getItem('isAuthenticated') === 'true';

  return { signIn, signOut, isLogged, isAuthenticated$ };
};