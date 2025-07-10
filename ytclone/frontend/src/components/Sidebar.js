import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/upload" style={styles.link}>Upload</Link>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/watchlater" style={styles.link}>Watch Later</Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#2c2c2c',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '15px',
    fontSize: '16px',
  },
};

export default Sidebar;
