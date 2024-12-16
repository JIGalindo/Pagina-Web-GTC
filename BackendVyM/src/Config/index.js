const app = require("./app");
const database = require("./database");

const main = () => {
  database.connect((err) => {
    if (err) {
      console.error("error al conectar a la base datos", err);
    } else {
      console.log("base de datos conectada");
    }
  });

  app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${4000}`);
  });
};

main(); 
