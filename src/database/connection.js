const mongoose = require('mongoose');
const config = require('../config');
require('dotenv').config();
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    mongoose.connection.on('connecting', () => logger.info('Conectando ao MongoDB...'));
    mongoose.connection.on('connected', () => logger.info('✅ Conectado ao MongoDB'));
    mongoose.connection.on('disconnected', () => logger.warn('❌ Desconectado do MongoDB'));

    await mongoose.connect(process.env.MONGODB_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 segundos
      socketTimeoutMS: 45000, // 45 segundos
      maxPoolSize: 10, // Número máximo de conexões
    });
    
    logger.info(`Banco de dados: ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (error) {
    logger.error('Erro de conexão com MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;