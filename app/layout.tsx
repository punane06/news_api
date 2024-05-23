'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from 'react-redux';
import store from './store/page'; 
import Navbar from "./components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
      <Provider  store={store}>
        <Navbar />
          {children}
      </Provider>
        </body>
    </html>
  );
}
