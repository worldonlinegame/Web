const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

/*Crear base de datos "blog" con javascript*/



const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")

inputFile.addEventListener("change", e=>{
    console.log(myImage.file)
    const blob = inputFile.files[0]
    myFile.src = URL.createObjectURL(blob)
})