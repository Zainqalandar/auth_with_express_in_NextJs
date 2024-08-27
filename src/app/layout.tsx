// 'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import Head from 'next/head';
import {DataProvider} from '@/context/DataContext'

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'KS Learing App',
//   description: 'This is my learning app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
        <Navbar />
        {children}
        </DataProvider>
      </body>
    </html>
  );
}
