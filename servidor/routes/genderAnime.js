const express = require('express');
const router = express.Router();
const genderAnimeController = require('../controller/genderAnimeController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// crear genero anime
// api/genderAnime
router.post('/',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    genderAnimeController.crearGenderAnime
);

// obtener todos los generos anime
router.get('/',
    auth,
    genderAnimeController.obtenerGenderAnime
);

// Actualizar temporadas via ID
router.put('/:id',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    genderAnimeController.actualizarGenderAnime
);

// Eliminar un genero de anime
router.delete('/:id',
    auth,
    genderAnimeController.eliminarGenderAnime
);

module.exports = router