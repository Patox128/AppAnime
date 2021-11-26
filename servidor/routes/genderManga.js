const express = require('express');
const router = express.Router();
const genderMangaController = require('../controller/genderMangaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// crear genero anime
// api/genderAnime
router.post('/',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    genderMangaController.crearGenderManga
);

// obtener todos los generos anime
router.get('/',
    auth,
    genderMangaController.obtenerGenderManga
);

// Actualizar temporadas via ID
router.put('/:id',
    auth,
    [
        check('name', 'El nombre de la temporada es obligatorio').not().isEmpty()
    ],
    genderMangaController.actualizarGenderManga
);

// Eliminar un genero de anime
router.delete('/:id',
    auth,
    genderMangaController.eliminarGenderManga
);

module.exports = router