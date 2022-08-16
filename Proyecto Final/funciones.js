
function porcentajes(rm){
    for(let i=4;i<10;i+=0.5){
        const lista=document.getElementById("lista")
        const li=document.createElement("li")
              li.innerText=`Este es tu ${i*10}%: ${Math.round( rm * (0.10*i))}`
              lista.append(li)
        /* console.log(`Este es tu ${i*10}%:`,Math.round( rm * (0.10*i))) */
    }
}

function fcalculadora(){
    let rm = prompt(`Hola ${nombreAtleta} , porfavor indicame tu repeticion maxima para darte los porcentajes en kilogramos.`)
    porcentajes(rm)
}

function ingresarRm(){
    do{
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
}

function registroDeRm(){
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
    }

class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
}
