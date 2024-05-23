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
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Login onSubmit={handleLogin} />
      <div className=' max-w-[350px] mb-4 mt-8'>
        <h1 className='text-lg mb-4'>How to get an <strong>API Token</strong> from NewsAPI:</h1>
        <ol className='list-decimal ml-4 text-sm'>
          <li className='mb-1'>Go to the <a target='_blank' className='underline text-blue-500' href="https://newsapi.org/register">NewsAPI registration page</a></li>
          <li className='mb-1'>Create an Account</li>
          <li className='mb-1'>Confirm Your Email</li>
          <li className='mb-1'>Get Your API key:
            <dd className='text-xs'>-Once your email is confirmed, log in to your NewsAPI account</dd>
            <dd className='text-xs'>-Navigate to the API keys section in your account dashboard.</dd>
            <dd className='text-xs mb-1'>-Copy your unique API key provided there</dd>
          </li>
          <li className='mb-1'>Use the API key</li>
        </ol>
      </div>
    </main>
  );
}

export default Home;
