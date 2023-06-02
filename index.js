'use strict'
const express = require("express")
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path = require('path')
const app = express()
const loginRoute = require("./src/apis/login")
const puntoAtencionRoute = require("./src/apis/punto_atencion")
const tipoQuejaRoute = require("./src/apis/tipo_queja")
const regionesRoute = require("./src/apis/regiones")
const quejasRoute = require("./src/apis/ingreso_queja")


const port = 3000

app.use(bodyParser.json());

app.engine('.hbs', hbs.engine({
    defaultLayout: 'default',
    extname: '.hbs'})
);
app.set('view engine', '.hbs')

app.use("/api", loginRoute);
app.use("/api/punto_atencion", puntoAtencionRoute);
app.use("/api/tipo_queja", tipoQuejaRoute);
app.use("/api/regiones", regionesRoute);
app.use("/api/ingreso", quejasRoute);




app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/sweetalert2', express.static(path.join(__dirname, 'node_modules/sweetalert2/dist')))
app.get('/login',(req,res)=>{
    res.render('login')
});
app.get('/',(req,res)=>{
    res.render('login')
});

app.get('/home',(req,res)=>{
    res.render('home', {
        partials: {
            menu: 'menu'
        }
    });
});
app.get('/puntoatencion',(req,res)=>{
    res.render('punto-atencion');
});
app.get('/puntoatencion/agregar',(req,res)=>{
    res.render('punto-atencion-agregar');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// module.exports = app;
