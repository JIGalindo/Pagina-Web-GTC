const app = require("./src/Config/app");
const  database  = require("./src/Config/database");
require('dotenv').config();

const main = async () => {
  try {
    // Consulta de prueba para verificar la conexión
    await database.query("SELECT 1");
    console.log("Base de datos conectada correctamente");

    // Usa un valor por defecto si process.env.PORT no está definido
    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1); // Termina el proceso si no hay conexión
  }
};

main();
