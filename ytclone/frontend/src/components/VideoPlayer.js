import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';
const mediaUrl = path => path?.startsWith('http') ? path : `http://127.0.0.1:8000${path || ''}`;

export default function VideoPlayer() {
  const { id } = useParams(); const [video, setVideo] = useState(null); const [error, setError] = useState('');
  useEffect(() => { axios.get(`${API}/videos/${id}/`).then(({ data }) => setVideo(data)).catch(() => setError('This video could not be found.')); }, [id]);
  if (error) return <div className="empty-state"><h1>Video unavailable</h1><p>{error}</p><Link to="/">Back to videos</Link></div>;
  if (!video) return <p className="muted">Loading video…</p>;
  return <article className="watch-page"><Link className="back-link" to="/">← Back to discover</Link><div className="player-frame"><video controls playsInline poster={video.thumbnail ? mediaUrl(video.thumbnail) : undefined}><source src={mediaUrl(video.video_file)} />Your browser does not support video playback.</video></div><div className="watch-copy"><p className="eyebrow">LEARNER SPACE VIDEO</p><h1>{video.title}</h1><p className="video-byline">Shared by {video.uploaded_by} <span>·</span> {new Date(video.upload_time).toLocaleDateString()}</p>{video.description && <p className="video-description">{video.description}</p>}</div></article>;
}
