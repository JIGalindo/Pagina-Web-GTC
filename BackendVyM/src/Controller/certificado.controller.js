const database = require("../Config/database");
const mysql2 = require("mysql2");

const allCertificado = (req, res) => {
  const readQuery = `SELECT * FROM Certificado`;

  const query = mysql2.format(readQuery);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ message: result });
    } else {
      res.json({ message: "No hay certificados" });
    }
  });
};

const readCertificadoId = (req, res) => {
  const { id } = req.params;

  const readQuery = `SELECT * FROM Certificado WHERE id=?;`;

  const query = mysql2.format(readQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: "Certificado no Encontrado params" });
    }
  });
};
const readCertificado = (req, res) => {
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

const createCertificado = (req, res) => {
  const {
    nombreCompleto,
    identidad,
    empresa,
    tipoCertificado,
    instructor,
    fechaCertificacion,
  } = req.body;

  const createQuery =
    "INSERT INTO Certificado(nombreCompleto,identidad,empresa,tipoCertificado,instructor,fechaCertificacion) value(?,?,?,?,?,?);";

  const query = mysql2.format(createQuery, [
    nombreCompleto,
    identidad,
    empresa,
    tipoCertificado,
    instructor,
    fechaCertificacion,
  ]);

  database.query(query, (err, result) => {
    if (err) throw err;
    //console.log(result);
    res.json({ message: "Certificado Creado" });
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
  readCertificado,
  readCertificadoId,
  createCertificado,
  allCertificado,
  /*
  updateUser,
  deleteUser,*/
};
