let atletas = [{}]
let snatch = []
let cleanAndJerk = []
let clean =[]
let usuarioNuevo=true
let bienvenida = document.getElementById("bienvenida")


let nombreAtleta = prompt(`Porfavor ingrese su nombre`)
let primerRegistro=confirm(`Hola ${nombreAtleta}, si es tu primer registro , necesito que cargues tus repeticiones maximas de Snatch , C&J y Squat Clean `)
if(primerRegistro===true){
    atletas.push(new Atleta(nombreAtleta,prompt(`coloque su rm de snatch`),prompt(`coloque su rm de clean`),prompt(`coloque su rm de clean and jerk`)))
}


function cambiarEncabezado(){
    bienvenida.innerText = `Hola ${nombreAtleta} ,Bienvenido a tu app para atletas`
}
cambiarEncabezado()



do{

let herramientaRm =confirm(`Hola ${nombreAtleta} queres utilizar la calculadora de repeticiones maximas?`)
    
if(herramientaRm===true){
    let rm = prompt(`Hola ${nombreAtleta} , porfavor indicame tu repeticion maxima para darte los porcentajes en kilogramos.`)
    porcentajes(rm)
    }

let ingresarMarca= confirm(`Tienes alguna nueva marca de repeticion maxima que quieras agregar a la tabla?`)

if(ingresarMarca===true){
    let movimiento=prompt(`¿Cual es el movimiento?`)
    let nuevaMarca=prompt(`Porfavor indica el peso en kilogramos de la nueva marca`)
    if(movimiento=="snatch"){
        snatch.push({nombre:nombreAtleta,marca:nuevaMarca});
        console.table(snatch);
}
    if(movimiento=="cleanAndJerk"){
        cleanAndJerk.push({nombre:nombreAtleta,marca:nuevaMarca});
        console.table(cleanAndJerk);
}
    if(movimiento=="clean"){
        clean.push({nombre:nombreAtleta,marca:nuevaMarca});
        console.table(clean);
}
}
    

    usuarioNuevo=confirm(`¿Desea agregar otra marca?`)
        
}while(usuarioNuevo===true)






