import React from 'react';
import FeedbackForm from './components/feedbackForm';
import FeedbackDashboard from './components/feedbackDashboard';

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">User Feedback System</h1>
      <FeedbackForm />
      <hr className="my-6" />
      <FeedbackDashboard />
    </div>
  );
}

export default App;