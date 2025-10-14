const app = require("./app");
const database = require("./database"); // este es el pool

const main = async () => {
  try {
    // Consulta de prueba para verificar la conexión
    await database.query("SELECT 1");
    console.log("Base de datos conectada correctamente");

    app.listen(database.port||4000, () => {
      console.log("Servidor corriendo en el puerto 4000");
    });
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1); // opcional: termina el proceso si no hay conexión
  }
};

main();
