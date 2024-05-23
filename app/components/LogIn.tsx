'use client'
import React, { useState, useEffect } from 'react';

interface LoginProps {
  onSubmit: (email: string, apiKey: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, apiKey);
  };


  return (
    <form className='bg-gray-700 flex flex-col space-around rounded p-6' onSubmit={handleSubmit}>
      <label
        htmlFor='email'
      >
        E-mail
      </label>
      <input
        type="email"
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className='rounded p-2 mb-2 text-black'
      />
      <label
        htmlFor='apikey'
      >
        API key
      </label>
      <input
        type="text"
        name='apikey'
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
        className='rounded p-2 mb-2 text-black'
      />
      <button className='bg-blue-400 hover:bg-blue-300 rounded text-lg p-2 mt-4' type="submit">Login</button>
    </form>
  );
};

export default Login;
