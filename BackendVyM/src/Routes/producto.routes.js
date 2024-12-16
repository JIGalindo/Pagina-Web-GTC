const express = require("express");
const { isAuthenticated } = require("../Controller/auth.controller");
const { createInventory,readInventoryUser } = require("../Controller/producto.controller");

const router = express.Router();

//router.get("/:id", readCertificadoId);

router.get("/", isAuthenticated,readInventoryUser);

router.post("/", isAuthenticated, createInventory);

module.exports = router;
