// Rutas para usuarios
const exprress = require('express');
const router = exprress.Router();
const usuarioController = require('../controller/usuarioController');
const { check } = require('express-validator');


// Crear un usuario
// api/usuarios
router.post('/', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    usuarioController.crearUsuario
);

module.exports = router;