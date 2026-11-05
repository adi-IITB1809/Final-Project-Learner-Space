import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const { data } = await axios.post(`${API}/login/`, { username, password });
      onLogin(data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Could not sign in. Check your details and try again.');
    }
  };

  return <section className="form-card"><h1>Sign in</h1>{error && <p className="error" role="alert">{error}</p>}
    <form onSubmit={handleSubmit} className="stack-form">
      <label>Username<input autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} required /></label>
      <label>Password<input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
      <button className="primary-button">Sign in</button>
    </form><p>New here? <Link to="/register">Create an account</Link></p></section>;
}
