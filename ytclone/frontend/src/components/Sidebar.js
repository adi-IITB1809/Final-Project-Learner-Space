import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return <aside className="sidebar"><div className="sidebar-label">EXPLORE</div>
    <NavLink to="/" end className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}><span>⌂</span> Discover</NavLink>
    <NavLink to="/upload" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}><span>＋</span> Upload video</NavLink>
    <NavLink to="/dashboard" className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}><span>▤</span> My library</NavLink>
    <div className="sidebar-note">A space to share what you’re learning.</div>
  </aside>;
}
