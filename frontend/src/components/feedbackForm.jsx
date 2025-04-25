
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '', category: 'suggestion' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', formData);
      alert('Feedback submitted!');
      setFormData({ name: '', email: '', feedback: '', category: 'suggestion' });
    } catch (err) {
      alert('Error submitting feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="block mb-2" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="block mb-2" />
      <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Your feedback" required className="block mb-2"></textarea>
      <select name="category" value={formData.category} onChange={handleChange} className="block mb-2">
        <option value="suggestion">Suggestion</option>
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default FeedbackForm;