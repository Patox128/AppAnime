const express = require('express');
const router = express.Router();
const temporadaController = require('../controller/temporadaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// crear temporadas anime
// api/temporadas
router.post('/',
    auth,
    temporadaController.crearTemporada
);

// Obtener todas las temporadas
router.get('/',
    auth,
    temporadaController.obtenerTemporadas
);

// Actualizar temporadas via ID
router.put('/:id',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    temporadaController.actualizarTemporada
);

// Eliminar una temporada
router.delete('/:id',
    auth,
    temporadaController.eliminarTemporada
);

module.exports = router;