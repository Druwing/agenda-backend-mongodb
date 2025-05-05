// src/services/agenda.service.js
const Agenda = require('../database/models/Agenda.model');
const { StatusCodes } = require('http-status-codes');
const logger = require('../utils/logger');

const createAgenda = async (userId, agendaData) => {
  try {
    const agenda = await Agenda.create({ ...agendaData, user: userId });
    logger.info(`Agenda created: ${agenda._id}`);
    return agenda;
  } catch (error) {
    logger.error(`Error creating agenda: ${error.message}`);
    throw {
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Failed to create agenda item'
    };
  }
};

const getUserAgendas = async (userId) => {
  try {
    return await Agenda.find({ user: userId }).sort({ date: 1 });
  } catch (error) {
    logger.error(`Error getting user agendas: ${error.message}`);
    throw {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: 'Failed to fetch agendas'
    };
  }
};

const getAgendaById = async (userId, agendaId) => {
  try {
    const agenda = await Agenda.findOne({ _id: agendaId, user: userId });

    if (!agenda) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Agenda item not found'
      };
    }

    return agenda;
  } catch (error) {
    logger.error(`Error getting agenda: ${error.message}`);
    throw error;
  }
};

const updateAgenda = async (userId, agendaId, updateData) => {
  try {
    const agenda = await Agenda.findOneAndUpdate(
      { _id: agendaId, user: userId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!agenda) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Agenda item not found'
      };
    }

    logger.info(`Agenda updated: ${agendaId}`);
    return agenda;
  } catch (error) {
    logger.error(`Error updating agenda: ${error.message}`);
    throw error;
  }
};

const deleteAgenda = async (userId, agendaId) => {
  try {
    const agenda = await Agenda.findOneAndDelete({ _id: agendaId, user: userId });

    if (!agenda) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Agenda item not found'
      };
    }

    logger.info(`Agenda deleted: ${agendaId}`);
    return { success: true };
  } catch (error) {
    logger.error(`Error deleting agenda: ${error.message}`);
    throw error;
  }
};

module.exports = {
  createAgenda,
  getUserAgendas,
  getAgendaById,
  updateAgenda,
  deleteAgenda
};