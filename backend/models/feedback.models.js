import mongoose, {Schema} from 'mongoose';

const feedbackModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  category: { type: String, enum: ['suggestion', 'bug', 'feature'], default: 'suggestion' },
  timestamp: { type: Date, default: Date.now }
});

export const feedbackSchema = mongoose.model('Feedback', feedbackModel);
