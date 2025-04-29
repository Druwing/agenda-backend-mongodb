require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const { StatusCodes } = require('http-status-codes');

const routes = require('./src/routes');
const { errorConverter, errorHandler } = require('./src/middlewares/error.middleware');
const logger = require('./src/utils/logger');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: logger.stream }));

// Routes
app.use('/api', routes);

// 404 handler
app.use((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    error: 'The requested resource was not found',
  });
});

// Error handling
app.use(errorConverter);
app.use(errorHandler);

// Database connection
mongoose.connect(process.env.MONGODB_URI_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 segundos
      socketTimeoutMS: 45000, // 45 segundos
      maxPoolSize: 10, // Número máximo de conexões
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
