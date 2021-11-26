const Anime = require("../models/Anime");
const { validationResult } = require("express-validator");

// Crea un anime
exports.crearAnime = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    // crear el anime
    const anime = new Anime(req.body);
    await anime.save();
    res.json(anime);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Obtener todos los animes
exports.obtenerAnimes = async (req, res) => {
  try {
    const animes = await Anime.findAll({
      order: [["emissionDate", "DESC"]],
    });
    res.json({ animes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Actualizar anime
exports.actualizarAnime = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer la informacion 
  const {
    name,
    status,
    emissionDate,
    endDate,
    type,
    description,
    coverPage,
    temporadaId,
  } = req.body;

  try {
    // revisar el ID y actualizar
    let [anime] = await Anime.update(
      {
        name,
        status,
        emissionDate,
        endDate,
        type,
        description,
        coverPage,
        temporadaId,
      },
      { where: { id: req.params.id } }
    );
    if (!anime) {
      return res.status(404).json({ msg: "Anime no encontrado" });
    }
    res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

// Eliminar un anime por ID
exports.eliminarAnime = async (req, res) => {
  try {
    // revisar el ID y eliminar
    const anime = await Anime.destroy({ where: { id: req.params.id } });
    if (!anime) {
      return res.status(404).json({ msg: "Anime no encontrado" });
    }
    res.json({ msg: "Anime Eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
