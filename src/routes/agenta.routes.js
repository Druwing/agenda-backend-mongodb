// src/routes/agenda.routes.js
const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agenda.controller');
const auth = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware');
const { createAgendaSchema, updateAgendaSchema } = require('../validations/agenda.validation');

router.post('/', auth, validate(createAgendaSchema), agendaController.createAgendaItem);
router.get('/', auth, agendaController.getUserAgendaItems);
router.get('/:id', auth, agendaController.getAgendaItem);
router.put('/:id', auth, validate(updateAgendaSchema), agendaController.updateAgendaItem);
router.patch('/:id', auth, validate(updateAgendaSchema), agendaController.updateAgendaItem);
router.delete('/:id', auth, agendaController.deleteAgendaItem);

module.exports = router;