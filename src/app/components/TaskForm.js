'use client';
import { useState } from 'react';

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}