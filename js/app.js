/* crear la conexion a la base de datos blog */

/*

localhost: DBFGREATCONTACTOS.mssql.somee.com
user: BobStudent_SQLLogin_1
password: 2gj4cyejhl

table- 1: USUARIO
    
    IdUsuario
    Email
    Password

    
table - 2 blog
   
    iduser int
    usuario varchar
    Evento varchar
    blog varchar
    img varchar


*/


const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")

inputFile.addEventListener("change", e=>{
    console.log(myImage.file)
    const blob = inputFile.files[0]
    myFile.src = URL.createObjectURL(blob)
})


/*Nuevo codigo para guardar la image en la store del navegador*/ 
    

    // creamos la base de datos en la store del navegador en un array

    const Users = JSON.parse(localStorage.getItem('#SubirImage')) || []
    isUserRegistered = inputFile.find(user => user.email === email)
    if(isUserRegistered){
        return alert('No se pudo cargar la imagen')
    }
    Users.push({myImage: myImage, myFile: myFile})
    localStorage.setItem('users',JSON.stringify(myFile.src))
    alert('Se ha registrado satisfactoriamente!')
    window.location.href = 'index.html'
    
})