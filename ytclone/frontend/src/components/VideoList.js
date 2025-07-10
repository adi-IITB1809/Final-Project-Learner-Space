import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/videos/')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <h2>All Videos</h2>
      {videos.map(video => (
        <div key={video.id}>
          <Link to={`/video/${video.id}`}>
            <h3>{video.title}</h3>
          </Link>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
