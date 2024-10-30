const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config/Config'); // Assure-toi que ce chemin est correct
const routes = require('./routes/Routes'); // Ajuste le chemin si nécessaire

const app = express();

// Connexion à MongoDB
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(cors()); // Enable CORS
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/Lundi', routes); // Utiliser les routes pour Lundi

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error'); // Assure-toi d'avoir une vue d'erreur si nécessaire
});

// Listen on the port defined in the config
app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`);
});

module.exports = app;
