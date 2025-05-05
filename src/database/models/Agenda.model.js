// src/database/models/Agenda.model.js
const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const agendaSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100
    },
    description: {
      type: String,
      trim: true
    },
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      trim: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Plugin para converter mongoose para JSON
agendaSchema.plugin(toJSON);

/**
 * @typedef Agenda
 */
const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;