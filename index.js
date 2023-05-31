'use strict'
const express = require("express")
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const loginRoute = require("./src/apis/login")
const puntoAtencionRoute = require("./src/apis/punto_atencion")

const port = 3000

app.use(bodyParser.json());

app.engine('.hbs', hbs.engine({
    defaultLayout: 'default',
    extname: '.hbs'})
);
app.set('view engine', '.hbs')

app.use("/api", loginRoute);
app.use("/api/punto_atencion", puntoAtencionRoute);


app.get('/login',(req,res)=>{
    res.render('login')
});



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// module.exports = app;
