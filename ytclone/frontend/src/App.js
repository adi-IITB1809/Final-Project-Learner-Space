import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Upload from './components/Upload';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import VideoPlayer from './components/VideoPlayer';
import Dashboard from './components/Dashboard';
import './App.css';

function AppContent() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token, username: localStorage.getItem('username') || '' } : null;
  });
  const signIn = data => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    setUser({ token: data.token, username: data.username });
  };
  const signOut = () => { localStorage.removeItem('token'); localStorage.removeItem('username'); setUser(null); };
  const privatePage = element => user ? element : <Navigate to="/login" replace />;

  return <div className="app-shell"><Sidebar /><div className="main-column"><Navbar user={user} onLogout={signOut} /><main className="page-content"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/upload" element={privatePage(<Upload user={user} />)} />
    <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login onLogin={signIn} />} />
    <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register onLogin={signIn} />} />
    <Route path="/video/:id" element={<VideoPlayer />} />
    <Route path="/dashboard" element={privatePage(<Dashboard user={user} />)} />
    <Route path="*" element={<section className="empty-state"><h1>Page not found</h1><a href="/">Go home</a></section>} />
  </Routes></main></div></div>;
}

export default function App() { return <Router><AppContent /></Router>; }
