const express = require('express');
const router = express.Router();
const cotizacionController = require ('../Controller/cotizacionController')

router
.get('/',cotizacionController.getAll)


module.exports = router;