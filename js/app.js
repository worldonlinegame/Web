const inputFile = document.getElementById("myImage")
const myImage = document.getElementById("myFile")

inputFile.addEventListener("change", e=>{
    console.log(myImage.file)
    const blob = inputFile.files[0]
    myFile.src = URL.createObjectURL(blob)
})