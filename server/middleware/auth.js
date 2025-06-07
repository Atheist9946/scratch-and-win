const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    // Skip auth for specific routes
    if (['/pcm', '/api/auth/login', '/api/auth/register'].includes(req.path)) {
      return next();
    }

    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Add user to request
    req.user = user;
    next();
  } catch (err) {
    console.error('Authentication error:', err.message);
    
    // Handle HTML routes differently than API routes
    if (req.accepts('html')) {
      return res.redirect('/user');
    }
    
    res.status(401).json({ message: 'Token is not valid' });
  }
};