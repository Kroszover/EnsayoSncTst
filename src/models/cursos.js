import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Curso = sequelize.define(
  "Curso",
  {
    codigo_curso: {
      type: DataTypes.STRING(30),
      primaryKey: true,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
    },
    fecha_termino: {
      // Corrected the attribute name here
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "cursos",
    updatedAt: false,
    createdAt: false,
  }
);

export { Curso };
