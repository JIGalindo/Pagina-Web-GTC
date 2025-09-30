const express = require("express");
const { isAuthenticated } = require("../Controller/auth.controller");
const {
  readCertificado,
  readCertificadoId,
  createCertificado,
  allCertificado,
  deleteCertificado,
  updateCertificado
} = require("../Controller/certificado.controller");

const router = express.Router();

router.get("/:id", readCertificadoId);
router.get("/", allCertificado);

router.get("/", readCertificado);
router.post("/",createCertificado);

//router.post("/", isAuthenticated, createCertificado);
router.delete("/:id", deleteCertificado);
router.put("/:id", updateCertificado);

module.exports = router;
