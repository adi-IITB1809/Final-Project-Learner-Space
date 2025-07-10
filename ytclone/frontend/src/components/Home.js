import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './VideoList';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video list from backend
    axios.get('http://127.0.0.1:8000/api/videos/')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Videos</h2>
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
