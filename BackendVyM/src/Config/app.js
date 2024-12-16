const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const certificadoRoutes = require("../Routes/certificado.routes");
const authRoutes = require("../Routes/auth.routes");
const productosRoutes = require("../Routes/producto.routes");

//permisos
app.use(
  cors({
    origin: true, // O especifica la URL del frontend si no quieres aceptar todos los orígenes
    credentials: true, // Permite el envío de cookies
  })
);

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000, httpOnly: true },
  })
);
/*
app.use((req, res, next) => {
  console.log("Cookies datos:", req.cookies); // Muestra las cookies que llegan
  console.log("Session datos:", req.session); // Muestra la sesión actual
  next();
});*/

//endpoints
app.get("/", (req, res) => {
  res.send("Backend V&M");
});
app.use("/inventario", productosRoutes);
app.use("/certificado", certificadoRoutes);
app.use("/auth", authRoutes);

module.exports = app;
