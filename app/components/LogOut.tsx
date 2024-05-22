'use client'
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';


interface LoginProps {
  onSubmit: (email: string, apiKey: string) => void;
}

const LogOut = () => {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('apiKey');
    console.log('Logged out and cleared localStorage');
    // Optionally, navigate to the home or login page
    router.push('/');
  };
  
  return (
    <button onClick={handleLogout}>Logout</button>
  );
};


export default LogOut;
