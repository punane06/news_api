'use client'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Login from "./components/LogIn";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();


  useEffect(() => {
    // Setting initial default values for testing
    //localStorage.setItem('email', 'test@example.com');
    //localStorage.setItem('apiKey', 'fb3f8180a1cb4314ba505f775c051d7d');
  }, []);

  const handleLogin = (email: string, apiKey: string) => {
    // Simplified login logic for testing
    const storedEmail = localStorage.getItem('email');
    const storedApiKey = localStorage.getItem('apiKey');

    console.log('Submitted Email:', email);
    console.log('Submitted API Key:', apiKey);
    console.log('Stored Email:', storedEmail);
    console.log('Stored API Key:', storedApiKey);

    if (storedEmail === email && storedApiKey === apiKey) {
      dispatch({ type: 'LOGIN', payload: { email, apiKey } });
      router.push('/news'); // Redirect to the /news page after successful login
    } else {
      localStorage.setItem('email', email);
      localStorage.setItem('apiKey', apiKey);
      dispatch({ type: 'LOGIN', payload: { email, apiKey } });
      router.push('/news'); // Redirect to the /news page after successful login
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('apiKey');
    dispatch({ type: 'LOGOUT' });
    console.log('Logged out and cleared localStorage');
    // Optionally, navigate to the home or login page
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello World!</div>
      <Login onSubmit={handleLogin} />
      <button onClick={handleLogout}>Logout</button>

    </main>
  );
}

export default Home;
