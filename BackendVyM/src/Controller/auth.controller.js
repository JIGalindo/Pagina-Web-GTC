const database = require("../Config/database");
const mysql2 = require("mysql2");
const bcrypt = require("bcrypt");

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);

  if (!email || !password) {
    return res.send("Por favor ingresa Usuario y Contraseña!");
  }

  const readQuery = `SELECT * FROM Usuario WHERE email = ?`;
  const query = mysql2.format(readQuery, [email]);

  database.query(query, async (err, results) => {
    if (err) {
      console.error("Error en la base de datos:", err);
      return res.status(500).send("Error en el servidor");
    }

    if (results.length > 0) {
      const user = results[0];
 
      // Comparar las contraseñas de manera segura usando bcrypt
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        // Authenticate the user
        req.session.loggedin = true;
        req.session.email = email;
        req.session.nombre = user.nombre;
        req.session.apellido = user.apellido;

        console.log("Usuario autenticado, session:", req.session);
        console.log("usuario autenticado");
        res.send("Usuario Autenticado");
      } else {
        res.send("Usuario y/o Contraseña Incorrecta");
      }
    } else {
      res.send("Usuario y/o Contraseña Incorrecta");
    }
  });
};

/*
const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  if (email && password) {
    const readQuery = `SELECT * FROM Usuario WHERE email = ? AND password = ?`;
    const query = mysql2.format(readQuery, [email, password]);

    // Execute SQL query that'll select the account from the database based on the specified username and password
    database.query(query, (err, results) => {
      // If there is an issue with the query, output the error
      if (err) throw err;
      // If the account exists
      if (results.length > 0) {
        const user = results[0];
        // Authenticate the user
        req.session.loggedin = true;
        req.session.email = email;
        req.session.nombre = user.nombre;
        req.session.apellido = user.apellido;

        console.log("Usuario autenticado, session:", req.session);
        res.send("Usuario Autenticado");
        // Redirect to home page
        //res.redirect("/home");
      } else {
        res.send("Usuario y/o Contraseña Incorrecta");
      }
      res.end();
    });
  } else {
    res.send("Por favor ingresa Usuario y Contraseña!");
    res.end();
  }
};*/

// Función para proteger rutas
const isAuthenticated = (req, res, next) => {
  //console.log("estado de logueo : ", req.session.loggedin);
  //console.log("Isauthenticated ejecutando");
  //console.log("Datos de la sesion : ", req.session);
  if (req.session && req.session.loggedin) {
    console.log("Usuario autenticado, continuando...");
    return next(); // Usuario autenticado, continúa a la siguiente función
  } else {
    console.log("Usuario no autenticado. Redirigiendo...");
    res.status(401).send("Por favor inicia sesión para acceder a esta página.");
  }
};

const logoutUser = (req, res) => {
  // Destruir la sesión
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error al cerrar sesión");
    }
    // Si no hay error, redirige al usuario a la página de inicio o login
    console.log("Sesion cerrada");
    res.send("Sesión cerrada exitosamente");
  });
};

module.exports = {
  logoutUser,
  loginUser,
  isAuthenticated,
};
