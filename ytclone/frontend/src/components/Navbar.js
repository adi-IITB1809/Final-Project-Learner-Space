import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return <header className="topbar"><Link className="brand" to="/" aria-label="Learner Space home"><span className="brand-mark">▶</span> Learner Space</Link>
    <nav className="top-links" aria-label="Account navigation">{user ? <><span className="welcome">Hi, {user.username}</span><button className="text-button" onClick={onLogout}>Sign out</button></> : <><Link to="/login">Sign in</Link><Link className="join-link" to="/register">Join</Link></>}</nav>
  </header>;
}
