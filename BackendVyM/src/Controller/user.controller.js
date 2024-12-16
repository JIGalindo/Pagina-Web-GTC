const database = require("../Config/database");
const mysql2 = require("mysql2");

const readUser = (req, res) => {
  const { id } = req.params;

  const readQuery = `SELECT * FROM Usuario WHERE id=?;`;

  const query = mysql2.format(readQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: "Usuario no Encontrado" });
    }
  });
};

const createUser = (req, res) => {
  const { nombre, apellido, edad } = req.body;

  const createQuery =
    "INSERT INTO Usuario(nombre,apellido ,edad) value(?,?,?);";

  const query = mysql2.format(createQuery, [nombre, apellido, edad]);

  database.query(query, (err, result) => {
    if (err) throw err;
    //console.log(result);
    res.json({ message: "Usuario Creado" });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad } = req.body;

  const updateQuery =
    "UPDATE  Usuario SET nombre=?, apellido=?, edad=? WHERE id=?;";
  const query = mysql2.format(updateQuery, [nombre, apellido, edad, id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json({ message: "Usuario Actualizado" });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM Usuario WHERE id=? ; ";
  const query = mysql2.format(deleteQuery, [id]);
  database.query(query, (err, result) => {
    if (err) throw err;
    res.json({ message: "Usuario Eliminado" });
  });
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
