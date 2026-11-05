import React from 'react';
import { Link } from 'react-router-dom';
import VideoList from './VideoList';

export default function Dashboard({ user }) {
  return <section className="library-page"><div className="section-heading"><div><p className="eyebrow">YOUR SPACE</p><h1>{user.username}’s library</h1><p className="form-intro">Videos you’ve shared with the Learner Space community.</p></div><Link to="/upload" className="primary-button">＋ Upload video</Link></div><VideoList mine token={user.token} /></section>;
}
