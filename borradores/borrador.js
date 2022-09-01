class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
}

let atletas = [{
    nombre:"facundo reyes",
    rmSnatch:100,
    rmCleanAndJerk:120,
    rmClean:110
}]
let snatch = []
let cleanAndJerk = []
let clean =[]
let usuarioNuevo=true
let bienvenida = document.getElementById("bienvenida");
let calculadora = document.getElementById("calculadora")
let repMax=document.getElementById("repMax")
let nombreAtleta = document.getElementById("nombreAtleta");
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in'),
      login =document.getElementById("login");

      document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    });

    login.addEventListener("click",direccionar)
    

/* 
let primerRegistro=confirm(`Hola ${nombreAtleta}, si es tu primer registro , necesito que cargues tus repeticiones maximas de Snatch , C&J y Squat Clean `)
if(primerRegistro===true){
    atletas.push(new Atleta(nombreAtleta,prompt(`coloque su rm de snatch`),prompt(`coloque su rm de clean`),prompt(`coloque su rm de clean and jerk`)))
}
 */
bienvenida.innerText = `Hola ${nombreAtleta} ,Bienvenida a tu app para atletas`

calculadora.addEventListener("click",fcalculadora)    

repMax.addEventListener("click",ingresarRm)


function direccionar(){
    let nombreAtleta = document.getElementById("nombreAtleta").value;
        location.href="index.html"
    }

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
