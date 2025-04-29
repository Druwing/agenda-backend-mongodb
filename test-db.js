const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jwt-auth')
  .then(() => console.log('Conectado!'))
  .catch(err => console.error('Erro:', err));