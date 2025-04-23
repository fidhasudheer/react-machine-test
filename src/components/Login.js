// src/components/Login.js
import React from 'react';

export default function Login({ username, password, onUsernameChange, onPasswordChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={username} onChange={onUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}