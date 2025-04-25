import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortBy, setSortBy] = useState('timestamp');
  const [category, setCategory] = useState('');

  const fetchFeedbacks = async () => {
    const params = {};
    if (sortBy) params.sortBy = sortBy;
    if (category) params.category = category;

    const res = await axios.get('http://localhost:5000/feedback', { params });
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [sortBy, category]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="mr-4">
          <option value="timestamp">Date</option>
          <option value="name">Name</option>
        </select>

        <label className="mr-2">Category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
        </select>
      </div>

      <ul>
        {feedbacks.map(fb => (
          <li key={fb._id} className="border-b py-2">
            <p><strong>{fb.name}</strong> ({fb.email})</p>
            <p>{fb.feedback}</p>
            <p className="text-sm text-gray-500">{new Date(fb.timestamp).toLocaleString()} | {fb.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDashboard;