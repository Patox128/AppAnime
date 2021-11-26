const GenderManga = require('../models/GenderManga');
const { validationResult } = require('express-validator');

exports.crearGenderManga = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    try {
        // crear una temporada anime
        const genderManga = new GenderManga(req.body);
        await genderManga.save();
        res.json(genderManga);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerGenderManga = async (req, res) => {
    try {
        const genderManga = await GenderManga.findAll();
        res.json({genderManga});
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

// Actualizar genero anime
exports.actualizarGenderManga = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer la informacion del proyecto
    const { name } = req.body;

    try {
        // let temporada = await Temporada.findByPk(req.params.id);
        // revisar el ID y actualizar
        const [genderManga] = await GenderManga.update({name}, {where: {id: req.params.id}});
        if(!genderManga) {
            return res.status(404).json({msg: 'Genero no encontrado'});
        }
        res.status(204).json()
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}

// Elimina una temporda por ID
exports.eliminarGenderManga = async(req, res) => {

    try {
        // let temporada = await Temporada.findByPk(req.params.id);
        // revisar el ID y actualizar
        const genderManga = await GenderManga.destroy({where: {id: req.params.id}});
        if(!genderManga) {
            return res.status(404).json({msg: 'Genero no encontrado'});
        }
        res.json({msg: 'Genero Eliminado'});
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}