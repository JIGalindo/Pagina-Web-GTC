const express = require("express");
const { isAuthenticated } = require("../Controller/auth.controller");
const {
  readCertificado,
  readCertificadoId,
  createCertificado,
} = require("../Controller/certificado.controller");

const router = express.Router();

router.get("/:id", readCertificadoId);

router.get("/", readCertificado);

router.post("/", isAuthenticated, createCertificado);

module.exports = router;
