const database = require("../Config/database");
const mysql2 = require("mysql2");

const allCertificado = async (req, res) => {
  try {
    const [result] = await database.query("SELECT * FROM Certificado");
    if (result.length > 0) {
      res.json({ message: result });
    } else {
      res.json({ message: "No hay certificados" });
    }
  } catch (error) {
    console.error("Error en allCertificado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

const readCertificadoId = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await database.query(
      "SELECT * FROM Certificado WHERE id=?",
      [id]
    );
    if (result[0]) {
      res.json(result[0]);
    } else {
      res.json({ message: "Certificado no encontrado (params)" });
    }
  } catch (error) {
    console.error("Error en readCertificadoId:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

const readCertificado = async (req, res) => {
  const { id } = req.body;
  try {
    const [result] = await database.query(
      "SELECT * FROM Certificado WHERE id=?",
      [id]
    );
    if (result[0]) {
      res.json(result[0]);
    } else {
      res.json({ message: "Certificado no encontrado (body)" });
    }
  } catch (error) {
    console.error("Error en readCertificado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

const createCertificado = async (req, res) => {
  const {
    nombreCompleto,
    identidad,
    empresa,
    tipoCertificado,
    instructor,
    fechaCertificacion,
  } = req.body;

  try {
    await database.query(
      "INSERT INTO Certificado(nombreCompleto, identidad, empresa, tipoCertificado, instructor, fechaCertificacion) VALUES (?, ?, ?, ?, ?, ?)",
      [
        nombreCompleto,
        identidad,
        empresa,
        tipoCertificado,
        instructor,
        fechaCertificacion,
      ]
    );
    res.json({ message: "Certificado creado" });
  } catch (error) {
    console.error("Error en createCertificado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

const deleteCertificado = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await database.query(
      "DELETE FROM Certificado WHERE id=?",
      [id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Certificado eliminado" });
    } else {
      res.status(404).json({ message: "Certificado no encontrado" });
    }
  } catch (error) {
    console.error("Error en deleteCertificado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

const updateCertificado = async (req, res) => {
  const { id } = req.params;
  const {
    nombreCompleto,
    identidad,
    empresa,
    tipoCertificado,
    instructor,
    fechaCertificacion,
  } = req.body;

  try {
    const [result] = await database.query(
      `UPDATE Certificado 
       SET nombreCompleto=?, identidad=?, empresa=?, tipoCertificado=?, instructor=?, fechaCertificacion=?
       WHERE id=?`,
      [
        nombreCompleto,
        identidad,
        empresa,
        tipoCertificado,
        instructor,
        fechaCertificacion,
        id,
      ]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Certificado actualizado" });
    } else {
      res.status(404).json({ message: "Certificado no encontrado" });
    }
  } catch (error) {
    console.error("Error en updateCertificado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  readCertificado,
  readCertificadoId,
  createCertificado,
  allCertificado,
  deleteCertificado,
  updateCertificado,
  /*
  updateUser,
  deleteUser,*/
};
