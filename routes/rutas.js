const express = require('express')

const { body, param, validationResult } = require('express-validator');
var router = express.Router()

const ctrlDatos1 = require('../controlador1');
const ctrlDatos2 = require('../controlador2');
router.get('/api1', ctrlDatos1.findDatos);
router.get('/api2', ctrlDatos2.findDatos);

module.exports = router;