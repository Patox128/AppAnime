const express = require('express');
const router = express.Router();
const animeController = require('../controller/animeController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// crear un anime
// api/animes
router.post('/',
    auth,
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
    ],
    animeController.crearAnime
);

// Obtener todos los animes
router.get('/',
    auth,
    animeController.obtenerAnimes
);

// Actualizar animes via ID
router.put('/:id',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    animeController.actualizarAnime
);

// Eliminar un Anime 
router.delete('/:id',
    auth,
    animeController.eliminarAnime
);

module.exports = router;