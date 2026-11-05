import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

export default function Register({ onLogin }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const update = event => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async event => {
    event.preventDefault(); setError(''); setMessage('');
    try {
      const { data } = await axios.post(`${API}/register/`, form);
      onLogin(data);
      setMessage('Account created successfully.');
      navigate('/');
    } catch (err) {
      const details = err.response?.data;
      setError(details ? Object.values(details).flat().join(' ') : 'Registration failed. Please try again.');
    }
  };

  return <section className="form-card"><h1>Create account</h1>{message && <p className="success">{message}</p>}{error && <p className="error" role="alert">{error}</p>}
    <form onSubmit={handleSubmit} className="stack-form">
      <label>Username<input name="username" autoComplete="username" value={form.username} onChange={update} required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={update} required /></label>
      <label>Password<input name="password" type="password" autoComplete="new-password" value={form.password} onChange={update} minLength="8" required /></label>
      <button className="primary-button">Create account</button>
    </form><p>Already registered? <Link to="/login">Sign in</Link></p></section>;
}
