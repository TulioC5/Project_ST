'use strict'
const express = require("express")
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const path = require('path')
const loginRoute = require("./src/apis/login")

const port = 3000

app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json());
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/sweetalert2', express.static(path.join(__dirname, 'node_modules/sweetalert2/dist')))


app.engine('.hbs', hbs.engine({
    defaultLayout: 'default',
    extname: '.hbs'})
);
app.set('view engine', '.hbs')


app.use("/api", loginRoute);
app.get('/login',(req,res)=>{
    res.render('login')
});



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// module.exports = app;
