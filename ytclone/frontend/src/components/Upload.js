import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video_file', videoFile);
    formData.append('thumbnail', thumbnail);

    try {
      await axios.post('http://127.0.0.1:8000/api/videos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
      });
      alert('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} required />
        <br />
        <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
