const express = require("express");
const mysql = require("mysql2");
const app = express();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "server-622565.vymhonduras.com",
  user: "vymhn_sistema",
  password: "Seguridadhn.",
  database: "vymhn_Certificaciones",
  port: 33062, // Puerto de la base de datos
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos.");
});

// Configuración del servidor de la aplicación
const PORT = 4000; // Puerto de la aplicación
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/*const mysql = require("mysql2");
const dontenv = require("dotenv");
dontenv.config();
const cors = require('cors')

//const routerApi = require ('./Routes')

dontenv.config();

const port = process.env.PORT||3000;
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Backend para aplicacion movil de cotizaciones")
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

//routerApi(app);*/
