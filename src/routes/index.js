// src/routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const protectedRoutes = require('./protected.routes');
const agendaRoutes = require('./agenda.routes');

router.use('/auth', authRoutes);
router.use('/agenda', agendaRoutes);
router.use('', protectedRoutes);

module.exports = router;