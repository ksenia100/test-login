import { createFileRoute, useRouter } from '@tanstack/react-router';
import Typography from '@/shared/components/ui/typography';
import { Button } from '@/shared/components/ui/button';
import { useAuth } from '@/shared/hooks/useAuth';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const { signIn, signOut, isLogged } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn(username, password); 
      router.invalidate(); 
    } catch (error) {
      setError('Invalid credentials. Please try again.'); 
    } finally {
      setLoading(false);
    }
  };  
  

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
    router.invalidate(); 
  };

  return (

    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg text-white bg-gray-800"
        style={{ maxWidth: '400px' }}
      >
        <Typography variant={'h2'} className="mt-8">
          Login
        </Typography>
        {isLogged() ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <Typography variant={'h3'} className="text-green-400">
              Hello user!
            </Typography>
            <Button
              variant={'destructive'}
              size={'sm'}
              onClick={handleSignOut}
              className="w-[110px]"
              disabled={loading}
            >
              Sign out
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black w-full"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-red-500"
              >
                {error}
              </motion.p>
            )}
            <Button
              size={'sm'}
              onClick={handleSignIn}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default LoginPage;
