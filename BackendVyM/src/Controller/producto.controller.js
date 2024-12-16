const database = require("../Config/database");
const mysql2 = require("mysql2");
//const session = require("express-session");

const createInventory = (req, res) => {
  const {
    codigo,
    descripcion,
    talla,
    almacen,
    zona,
    pasillo,
    seccion,
    rack,
    cantidad,

  } = req.body;

  const usuario=req.session.nombre

  const createQuery =
    "INSERT INTO Producto(codigo,descripcion,talla,almacen,zona,pasillo,seccion,rack,cantidad,usuario) value(?,?,?,?,?,?,?,?,?,?);";

  const query = mysql2.format(createQuery, [
    codigo,
    descripcion,
    talla,
    almacen,
    zona,
    pasillo,
    seccion,
    rack,
    cantidad,
    usuario,
  ]);

  database.query(query, (err, result) => {
    if (err) throw err;
    //console.log(result);
    res.json({ message: "Certificado Creado" });
  });
};

const readInventoryUser = (req, res) => {
  const usuario=req.session.nombre

  const readQuery = `SELECT * FROM Producto WHERE usuario=?;`;

  const query = mysql2.format(readQuery, [usuario]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result !== undefined) {
      res.json(result);
    } else {
      res.json({ message: "Inventario por usuario no Encontrado params" });
    }
  });
};
/*const readCertificado = (req, res) => {
  const { id } = req.body;

  const readQuery = `SELECT * FROM Certificado WHERE id=?;`;

  const query = mysql2.format(readQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: "Certificado no Encontrado body" });
    }
  });
};
/*
const updateUser = (req, res) => {
  const {id}= req.params
  const {nombre,apellido,edad}=req.body;

  const updateQuery = "UPDATE  Usuario SET nombre=?, apellido=?, edad=? WHERE id=?;";
  const query = mysql2.format(updateQuery,[nombre,apellido,edad,id])

  database.query(query,(err,result)=>{
    if (err) throw err;
    console.log(result)
    res.json({message: "Usuario Actualizado"});
  })
};

const deleteUser = (req, res) => {
  const {id}= req.params;

  const deleteQuery= "DELETE FROM Usuario WHERE id=? ; ";
  const query = mysql2.format(deleteQuery,[id])
  database.query(query,(err,result)=>{
    if (err)throw err;
    res.json({ message: "Usuario Eliminado" })
  })
}*/

module.exports = {
  createInventory,
  readInventoryUser
  /*
  updateUser,
  deleteUser,*/
};
