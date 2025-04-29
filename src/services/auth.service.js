const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const config = require('../config');
const logger = require('../utils/logger');
const User = require('../database/models/User.model');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwt.secret, {
    expiresIn: config.jwt.expire,
  });
};

const register = async (userData) => {
  try {
    if (await User.isEmailTaken(userData.email)) {
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        message: 'Email already taken',
      };
    }

    const user = await User.create(userData);
    logger.info(`User registered: ${user.email}`);
    return user;
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      throw {
        statusCode: StatusCodes.UNAUTHORIZED,
        message: 'Incorrect email or password',
      };
    }

    const token = generateToken(user.id);
    logger.info(`User logged in: ${user.email}`);
    return { user, token };
  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    throw error;
  }
};

module.exports = {
  register,
  login,
};