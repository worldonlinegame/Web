/* crear la conexion a la base de datos blog */

/*

localhost: DBFGREATCONTACTOS.mssql.somee.com
user: BobStudent_SQLLogin_1
password: lo tengo que copiar del hosting de la base de datos

*/

const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")

inputFile.addEventListener("change", e=>{
    console.log(myImage.file)
    const blob = inputFile.files[0]
    myFile.src = URL.createObjectURL(blob)
})