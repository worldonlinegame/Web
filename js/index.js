const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

/*Crear base de datos "blog" con javascript*/



function subirImagen(){
    const inputFile = document.getElementById("myImage")
    const myImage = document.getElementById("myFile")
    
    inputFile.addEventListener("change", e=>{
        const blob = inputFile.inputFile[0]
        myFile.src = URL.createObjectURL(blob)
    })

}