require('dotenv').config() // Al inicio de la app se asignan las variables de entorno en el sistema operativo

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

// Middlewares
app.use(morgan('dev')) // Permite ver por consola las peticiones HTTP
app.use(express.urlencoded({extended: false})) //  
app.use(express.json()) // Convierte los datos que llegan al server a formato json (objeto)

// Routes
app.use(require('./routes/index'))

// Static content
app.use(express.static(path.join(__dirname, 'public'))) // El módulo path me permite concatenar el path sin importar el S.O. (Linux y Mac "/", Windos "\")

app.listen(3000)
console.log('Server started')