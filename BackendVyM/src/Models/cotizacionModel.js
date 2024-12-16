const { Model, DataTypes } = require("sequelize");

const cotizaciones_tabla = "Certificados";

class Cotizacion extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: cotizaciones_tabla,
      modelName: "Cotizacion",
      timestamp: true,
    };
  }
}

const CotizacionSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "edad",
  },
  empresa: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "empresa",
  },
  instructor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "instructor",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "estado",
  },
};

module.exports = {Cotizacion,CotizacionSchema};
