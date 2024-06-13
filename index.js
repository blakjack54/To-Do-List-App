import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoItem({ text }) {
  return (
    <li>{text}</li>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() === '') return;
    setTodos([...todos, todoInput.trim()]);
    setTodoInput('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter a task"
          required
        />
        <button type="submit
