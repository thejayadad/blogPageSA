'use client'
 
import React from 'react';
import { useFormStatus } from 'react-dom'
import { FiPlus } from 'react-icons/fi'; // Import FiPlus icon


export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
    className='mt-24 p-6  bg-gray-200  text-white text-2xl rounded-full hover:bg-gray-600 transition-all duration-300'
    type="submit" disabled={pending}>
      {pending ? (
        <div className="flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        'Submit'
      )}

      <style jsx>{`
        .spinner {
          width: 60px;
          height: 60px;
          border: 3px solid transparent;
          border-top-color: #3498db; /* Change this color to your desired color */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}
