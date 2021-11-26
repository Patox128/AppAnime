const Manga = require("../models/Manga");
const { validationResult } = require("express-validator");

// Crea un Manga
exports.crearManga = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  
  try {
    // crear el manga
    const manga = new Manga(req.body);
    await manga.save();
    res.json(manga);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Obtener todos los mangas
exports.obtenerMangas = async (req, res) => {
  try {
    const mangas = await Manga.findAll({
      order: [["emissionDate", "DESC"]],
    });
    res.json({ mangas });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Actualizar manga por ID
exports.actualizarManga = async (req, res) => {
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
  } = req.body;

  try {
    // revisar el ID y actualizar
    let [manga] = await Manga.update(
      {
        name,
        status,
        emissionDate,
        endDate,
        type,
        description,
        coverPage,
      },
      { where: { id: req.params.id } }
    );
    if (!manga) {
      return res.status(404).json({ msg: "Manga no encontrado" });
    }
    res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
}

// Eliminar manga por ID
exports.eliminarManga = async (req, res) => {
  try {
    // revisar el ID y eliminar
    const manga = await Manga.destroy({ where: { id: req.params.id } });
    if (!manga) {
      return res.status(404).json({ msg: "Manga no encontrado" });
    }
    res.json({ msg: "Manga Eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
}
