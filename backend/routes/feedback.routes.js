// import express from 'express';
import {Router} from 'express';
import {feedbackSchema} from '../models/feedback.models.js';

const router = Router()
// POST /feedback
router.post('/', async (req, res) => {
  try {
    const newFeedback = new feedbackSchema(req.body);
    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /feedback
router.get('/', async (req, res) => {
  try {
    const { sortBy = 'timestamp', category } = req.query;
    let filter = {};
    if (category) filter.category = category;

    const feedbacks = await feedbackSchema.find(filter).sort({ [sortBy]: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router
