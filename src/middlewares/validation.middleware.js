// src/middlewares/validation.middleware.js
const { StatusCodes } = require('http-status-codes');
const logger = require('../utils/logger');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: false
  });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    logger.error(`Validation error: ${errorMessages.join(', ')}`);
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Validation error',
      errors: errorMessages
    });
  }

  next();
};

module.exports = validate;
