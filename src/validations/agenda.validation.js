// src/validations/agenda.validation.js
const Joi = require('joi');

const createAgendaSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().allow('').optional(),
  date: Joi.date().iso().required(),
  location: Joi.string().allow('').optional(),
  isCompleted: Joi.boolean().optional()
});

const updateAgendaSchema = Joi.object({
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().allow('').optional(),
  date: Joi.date().iso().optional(),
  location: Joi.string().allow('').optional(),
  isCompleted: Joi.boolean().optional()
});

module.exports = {
  createAgendaSchema,
  updateAgendaSchema
};