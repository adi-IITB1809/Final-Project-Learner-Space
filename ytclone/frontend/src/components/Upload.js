import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

export default function Upload({ user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async event => {
    event.preventDefault(); setError(''); setBusy(true);
    const body = new FormData();
    body.append('title', title); body.append('description', description); body.append('video_file', videoFile);
    if (thumbnail) body.append('thumbnail', thumbnail);
    try {
      await axios.post(`${API}/videos/`, body, { headers: { Authorization: `Token ${user.token}` } });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data ? Object.values(err.response.data).flat().join(' ') : 'Cannot reach the Learner Space API. Make sure Django is running at http://127.0.0.1:8000 and try again.');
    } finally { setBusy(false); }
  };
  return <section className="form-card upload-card"><p className="eyebrow">CONTRIBUTE</p><h1>Share a video</h1><p className="form-intro">Add a lesson, walkthrough, or idea to the community library.</p>
    {error && <p className="error" role="alert">{error}</p>}
    <form onSubmit={handleSubmit} className="stack-form">
      <label>Video title<input value={title} onChange={e => setTitle(e.target.value)} maxLength="100" required /></label>
      <label>Description<textarea value={description} onChange={e => setDescription(e.target.value)} rows="4" placeholder="What will learners take away?" /></label>
      <label>Video file<input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files?.[0] || null)} required /></label>
      <label>Thumbnail <span className="optional">(optional)</span><input type="file" accept="image/*" onChange={e => setThumbnail(e.target.files?.[0] || null)} /></label>
      <button className="primary-button" disabled={busy}>{busy ? 'Uploading…' : 'Publish video'}</button>
    </form><p className="muted">Signed in as {user.username} · <Link to="/dashboard">View your library</Link></p></section>;
}
