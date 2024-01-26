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



/* Funcion para subir imagenes */

const express = require('express');

//import  express from 'express';

import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ['image/jpeg', 'image/png', 'image/gif'];

const multerUpload = multer( {
   storage: multer.diskStorage({
       destination: join(CURRENT_DIR, '../uploads'),
       filename:(res, file, cb) => {
           cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
       }
   }),
    fileFilter: (req, file, cb)=>{
        if(MIMETYPES.includes(file.mimetype)){ cb(null, true);
        const fileExtension = extname(file.originalname);
        }else{ cb(new Error(`Only ${MIMETYPES.join('')} are allowed`));
        }
    },
    limits: {
        filedSize: 10000000,
    }
        
    }
    
    
    );
const express = Express();

expressApp.post('/upload', multerUpload.single('myImage'), (req, res) => {
    console.log(req.file);

    res.sendStatus(200);
});

express.Application.use('/upload', express.static(join(CURRENT_DIR, '../uploads')));

express.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));


