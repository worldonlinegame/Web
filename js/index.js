
//Esta funcion redirecciona al login si no existe un usuario
const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')
logout.addEventListener('click', () => {
    alert('Hasta pronto')
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
})
/**
 * Este es el formulario de login
 */

const loginform = document.querySelector('#loginform')
loginform.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenid@ ${validUser.name} a la comunidad fGreat!`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'
})

/* formulario de registro*/

const registroform = document.querySelector("#registroform")
registroform.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    // creamos la base de datos en la store del navegador en un array

    const Users = JSON.parse(localStorage.getItem('users')) || []
    isUserRegistered = Users.find(user => user.email === email)
    if (isUserRegistered) {
        return alert('El usuario ya existe!')
    }
    Users.push({ name: name, email: email, password: password })
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Se ha registrado satisfactoriamente!')
    window.location.href = 'login.html'

})


/*Crear base de datos "blog" con javascript*/

/*
la url de github es: https://worldonlinegame.github.io/Web/public/fcbook.png
*/




/* Funcion para subir imagenes */

/*
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/uploads', upload.single('myImage'), (req, res) => {
    console.log(req.file);
    res.send('Imagen subida');
})

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
//import  express from 'express';

import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

*/


