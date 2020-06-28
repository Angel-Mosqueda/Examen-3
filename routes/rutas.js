const express = require('express')

const { body, param, validationResult } = require('express-validator');
var router = express.Router()

const ctrlDatos = require('../controlador');
router.get('/api1', ctrlDatos.findDatos);
router.get('/api2', ctrlDatos.findDatos);

module.exports = router;