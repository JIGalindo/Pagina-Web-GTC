const express = require("express");

const cotizacionRoute = require("./cotizacionRoute");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/certificados", cotizacionRoute);
}

module.exports = routerApi;
