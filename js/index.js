const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

/*Crear base de datos "blog" con javascript*/



function subirImagen(){
    const inpuImage = document.getElementById("myImage")
    const myImage = document.getElementById("myFile")
    
    inputFile.addEventListener("change", e=>{
        const Blob = inputFile.inpuImage[0]
        myFile.src = URL.createObjectURL(Blob)
    })

}