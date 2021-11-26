require('dotenv').config();

const User = require ('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUser = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer el email y password
    const { email, password } = req.body;

    try {
        // revisar que sea un usuario registrado
        let usuario = await User.findOne({ where: {email}})

        if(!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe'});
        }

        // revisar el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passCorrecto) {
            return res.status(400).json({msg: 'Password Incorrecto'})
        }

        // si todo es correcto crear y firmar el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        };
        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            // mensaje de confirmacion
            res.json({ token });

        });

    } catch (error) {
        console.log(error);
    }

}

// obtener que usuario esta autenticado
exports.userAutenticado = async (req, res) => {
    try {
        const usuario = await User.findOne({where: {id: req.usuario.id}, attributes:['id', 'name', 'email', 'role', 'active']});
        res.json({usuario});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}