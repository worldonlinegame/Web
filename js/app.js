/* crear la conexion a la base de datos blog */

// app.js

/*
const express = require('express');
const { readdir } = require('fs');
const multer = require('multer');
const path = require('path');
const app = express();
*/
import "com.cloudinary.*";
import { Cloudinary } from "cloudinary";
Cloudinary: cloudinary = new Cloudinary(ObjectUtils.asMap(
  "cloud_name", "dre4dqrcw",
  "api_key", "117812972249589",
  "api_secret", "RnpU_py4isgtLz0aZbruc_t5ZUY"));

const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")


CLOUDINARY_URL="https://res.cloudinary.com/dre4dqrcw/image/upload/c_limit,h_100,w_150/v1707071181/"
const CLODINARY_UPLOAD_PRESET = "siit7kc1"


inputFile.addEventListener("change", async (e)=>{
  const file = e.target.files[0]

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLODINARY_UPLOAD_PRESET);
  
 const res = await axios.post(CLODINARY_URL, formData, {
    headers: {
      "Content-Type": "application/form-data",
      "formData": "formData"
    }
    
  });
  console.log(res)

  
    
   
});






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










    

