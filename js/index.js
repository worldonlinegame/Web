/*
 Esta funcion carga la imagen pero no hace nada ya que la store del navegador no tiene subir imagenes
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')
logout.addEventListener('click', ()=>{
    alert('Hasta pronto')
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
})
*/


/*Crear base de datos "blog" con javascript*/

/*
la url de github es: https://worldonlinegame.github.io/Web/public/fcbook.png
*/



/* Funcion para subir imagenes */

const express = require('express');
const multer = require('multer');

const app = express();

app.post('/uploads', upload.single('myImage'), (req, res)=>{
    console.log(req.file);
    res.send('Imagen subida');
})

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
//import  express from 'express';

import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';




