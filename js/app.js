/* crear la conexion a la base de datos blog */

// app.js


const express = require('express');
const { readdir } = require('fs');
const multer = require('multer');
const path = require('path');
const app = express();


//app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
const PORT = 3000;
const expressApp = express();

import  express from 'express';
import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const PORTs = 3000;
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const multerUpload = multer( {
    dest: join(CURRENT_DIR, '../uploads'), 
    limits: {
        filedSize: 10000000
    }
        
    }
    
    
    );
const express = Express();

expressApp.post('/upload', multerUpload.single('myImage'), (req, res) => {
    console.log(req.file);

    res.sendStatus(200);
});


express.listen(PORTs, () => console.log(`Servidor iniciado en el puerto ${PORTs}`));

/*
app.use(express.static('public'));
//const app = express();

const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")

const images = app.post('./index.html', (req, res) => {
 

  const myImage = res.send('myImage').res.body.myImage
  const myFile = res.send('myFile').res.body.myFile

  console.log(myImage, myFile);

  readdir.listen('index.html');
});

*/


/*

onst inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")


inputFile.addEventListener("change", e=>{
    console.log(myImage.file)
    const blob = inputFile.files[0]
    myFile.src = URL.createObjectURL(blob)
    Users.push({myImage: myImage, myFile: myFile})
    localStorage.setItem('users',JSON.stringify(myFile.src))
   
})

*/



/*


// Configurar el almacenamiento
const storage = multer.diskStorage({
  destination: './public/images',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Inicializar la subida de archivos
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single('myImage');

// Manejar la solicitud POST para subir la imagen
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      // Manejar el error
    } else {
      if(req.file == undefined){
        res.status(400).send(req.file);
        // Ningún archivo seleccionado
      } else {
        
        // Archivo subido exitosamente, puedes guardar los detalles del archivo en una base de datos y luego mostrarlo en index.html
        res.redirect('index.html');
      }
    }
  });
  res.redirect('index.html');
});
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
*/










    

