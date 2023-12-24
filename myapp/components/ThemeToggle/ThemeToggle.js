'use client'
import React from 'react';
import { ThemeContext } from '@/lib/ThemeContext';
import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import Feather icons

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-1 bg-gray-200 p-2 rounded-full">
      <div
        onClick={toggle}
        className={`cursor-pointer p-2 rounded-full ${
          theme === 'dark' ? 'bg-white hover:bg-gray-300' : 'bg-gray-700 hover:bg-black'
        }`}
      >
        <FiSun
          color={theme === 'dark' ? '#000' : '#fff'}
          size={20}
        />
      </div>

      <div
        onClick={toggle}
        className={`cursor-pointer p-2 rounded-full ${
          theme === 'dark' ? 'bg-gray-700 hover:bg-black' : 'bg-white hover:bg-gray-300'
        }`}
      >
        <FiMoon
          color={theme === 'dark' ? '#fff' : '#000'}
          size={20}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
