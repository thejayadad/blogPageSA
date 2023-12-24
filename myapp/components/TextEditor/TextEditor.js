'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';

const TextEditor = ({ name }) => {
  return (
    <ReactQuill
      className='h-80 border-none border-b focus:outline-none'
      value={name} 
    />
  );
};

export default TextEditor;
