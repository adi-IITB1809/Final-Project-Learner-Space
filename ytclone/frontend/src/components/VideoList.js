import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';
const mediaUrl = path => path?.startsWith('http') ? path : `http://127.0.0.1:8000${path || ''}`;

export default function VideoList({ mine = false, token }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    axios.get(`${API}/videos/${mine ? '?mine=true' : ''}`, token ? { headers: { Authorization: `Token ${token}` } } : {})
      .then(({ data }) => { if (active) setVideos(data); })
      .catch(() => { if (active) setError('Videos could not be loaded. Check that the server is running.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [mine, token]);

  if (loading) return <p className="muted">Loading videos…</p>;
  if (error) return <p className="error" role="alert">{error}</p>;
  if (!videos.length) return <div className="empty-state"><div className="empty-icon">▶</div><h3>{mine ? 'Your library is waiting' : 'No videos yet'}</h3><p>Be the first to share something useful with the community.</p><Link to="/upload" className="primary-button">Upload a video</Link></div>;

  return <div className="video-grid">{videos.map(video => <Link className="video-card" to={`/video/${video.id}`} key={video.id}>
    <div className="video-thumb">{video.thumbnail ? <img src={mediaUrl(video.thumbnail)} alt="" /> : <div className="thumb-placeholder"><span>▶</span><small>LEARNER SPACE</small></div>}</div>
    <div className="video-card-copy"><h3>{video.title}</h3><p>{video.uploaded_by || 'Community member'} <span>·</span> {new Date(video.upload_time).toLocaleDateString()}</p></div>
  </Link>)}</div>;
}
