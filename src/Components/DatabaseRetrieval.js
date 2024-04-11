import React, { useState } from 'react';

const DatabaseUpdate = () => {
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');

  const updateData = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });

      if (response.ok) {
        setStatus('Data updated successfully!');
      } else {
        setStatus('Error updating data!');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      setStatus('Error updating data!');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>This is the database section</h1>
      <input
        type="text"
        name="title"
        value={data.title || ''}
        onChange={handleChange}
        placeholder="Enter Title..."
      />
      <br />
      <textarea
        name="content"
        value={data.content || ''}
        onChange={handleChange}
        placeholder="Enter Content..."
      ></textarea>
      <br />
      <button onClick={updateData}>Update Post</button>
      <p>{status}</p>
    </div>
  );
};

export default DatabaseUpdate;
