let atletas = [{}]
let snatch = []
let cleanAndJerk = []
let clean =[]
let usuarioNuevo=true
let bienvenida = document.getElementById("bienvenida");
let calculadora = document.getElementById("calculadora")
let repMax=document.getElementById("repMax")

let nombreAtleta = prompt(`Porfavor ingrese su nombre`)
let primerRegistro=confirm(`Hola ${nombreAtleta}, si es tu primer registro , necesito que cargues tus repeticiones maximas de Snatch , C&J y Squat Clean `)
if(primerRegistro===true){
    atletas.push(new Atleta(nombreAtleta,prompt(`coloque su rm de snatch`),prompt(`coloque su rm de clean`),prompt(`coloque su rm de clean and jerk`)))
}

bienvenida.innerText = `Hola ${nombreAtleta} ,Bienvenido a tu app para atletas`

calculadora.addEventListener("click",fcalculadora)    

repMax.addEventListener("click",ingresarRm)
    






