const express = require('express');
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

//session
routes.post('/session',sessionController.create);

//ongs
routes.post('/ongs',ongController.create);
routes.get('/ongs',ongController.index);
routes.get('/ongs',ongController.index);

//incidents
routes.post('/incidents',incidentController.create);
routes.get('/incidents',incidentController.index);
routes.delete('/incidents/:id',incidentController.delete);

//profile
routes.get('/profile',profileController.index);

module.exports = routes;
