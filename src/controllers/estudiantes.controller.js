import { request, response } from "express";
import { Estudiante } from "../models/estudiantes.js";
import { Curso } from "../models/cursos.js";

const findAll = async (req = request, res = response) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json({ estudiantes });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

const findFilter = async (req = request, res = response) => {
  const { idEstudiante } = req.body;
  try {
    const estudiantesFiltrados = await Estudiante.findAll({
      where: {
        idEstudiante: idEstudiante,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

export { findAll, findFilter };
