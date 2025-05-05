// src/controllers/agenda.controller.js
const agendaService = require('../services/agenda.service');
const { StatusCodes } = require('http-status-codes');

const createAgendaItem = async (req, res, next) => {
  try {
    const agenda = await agendaService.createAgenda(req.user.id, req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      data: agenda
    });
  } catch (error) {
    next(error);
  }
};

const getUserAgendaItems = async (req, res, next) => {
  try {
    const agendas = await agendaService.getUserAgendas(req.user.id);
    res.status(StatusCodes.OK).json({
      success: true,
      data: agendas
    });
  } catch (error) {
    next(error);
  }
};

const getAgendaItem = async (req, res, next) => {
  try {
    const agenda = await agendaService.getAgendaById(req.user.id, req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      data: agenda
    });
  } catch (error) {
    next(error);
  }
};

const updateAgendaItem = async (req, res, next) => {
  try {
    const agenda = await agendaService.updateAgenda(
      req.user.id, 
      req.params.id, 
      req.body
    );
    res.status(StatusCodes.OK).json({
      success: true,
      data: agenda
    });
  } catch (error) {
    next(error);
  }
};

const deleteAgendaItem = async (req, res, next) => {
  try {
    await agendaService.deleteAgenda(req.user.id, req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Agenda item deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAgendaItem,
  getUserAgendaItems,
  getAgendaItem,
  updateAgendaItem,
  deleteAgendaItem
};