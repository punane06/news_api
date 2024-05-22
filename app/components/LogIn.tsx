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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
