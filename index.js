const express = require("express")
const loginRoute = require("./src/apis/login");

//Cargar llave secreta desde variable de entorno

const app = express()

app.use(express.json());
app.use("/api", loginRoute);


app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

