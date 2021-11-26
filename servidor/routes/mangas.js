const express = require('express');
const router = express.Router();
const mangaController = require('../controller/mangaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// crear un manga
// api/mangas
router.post('/',
    auth,
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
    ],
    mangaController.crearManga
);

// obtener todos los mangas
router.get('/',
    auth,
    mangaController.obtenerMangas
);

// actualizar manga
router.put('/:id',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    mangaController.actualizarManga
);

// eliminar manga
router.delete('/:id',
    auth,
    mangaController.eliminarManga
);

module.exports = router;