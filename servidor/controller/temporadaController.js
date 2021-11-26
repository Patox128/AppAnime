const Temporada = require('../models/Temporada');
const { validationResult } = require('express-validator');

exports.crearTemporada = async (req, res) => {
    try {
        // crear una temporada anime
        const temporada = new Temporada(req.body);
        await temporada.save();
        res.json(temporada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

// obtiene todas las temporadas de anime
exports.obtenerTemporadas = async (req, res) => {

    try {
        const temporadas = await Temporada.findAll();
        res.json({ temporadas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}

// Actualizar temporada
exports.actualizarTemporada = async (req, res) => {
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
        let [temporada] = await Temporada.update({name}, {where: {id: req.params.id}});
        if(!temporada) {
            return res.status(404).json({msg: 'Temporada no encontrada'});
        }
        res.status(204).json()
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}

// Elimina una temporda por ID
exports.eliminarTemporada = async(req, res) => {

    try {
        // let temporada = await Temporada.findByPk(req.params.id);
        // revisar el ID y actualizar
        const temporada = await Temporada.destroy({where: {id: req.params.id}});
        if(!temporada) {
            return res.status(404).json({msg: 'Temporada no encontrada'});
        }
        res.json({msg: 'Temporada Eliminada'});
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}