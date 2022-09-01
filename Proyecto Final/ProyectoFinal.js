/* VARIABLES */

    let atletas = [{
    nombre:"facundo",
    rmSnatch:100,
    rmClean:120,
    rmCleanAndJerk:110
        }]
    let snatch = []
    let cleanAndJerk = []
    let clean =[]
    let usuarioNuevo=true
    let bienvenida = document.getElementById("bienvenida");
    let calculadora = document.getElementById("calculadora")
    let repMax=document.getElementById("repMax")
    

/* FUNCIONES */

   async function swal_1(){
const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: rm } = await Swal.fire({
  title: 'Ingresa tu RM para darte los porcentajes',
  input: 'number',
  inputLabel: '1 Repeticion maxima',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'Necesitas escribir una cantidad'
    }
  }
})
    }
    class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
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
    swal_1()
    /* let rm = prompt(`Hola ${localStorage.nombreAtleta} , porfavor indicame tu repeticion maxima para darte los porcentajes en kilogramos.`) */
    porcentajes(rm)
}

    function ingresarRm(){
    do{
    let ingresarMarca= confirm(`Tienes alguna nueva marca de repeticion maxima que quieras agregar a la tabla?`)

    if(ingresarMarca===true){
let movimiento=prompt(`¿Cual es el movimiento?`)
let nuevaMarca=prompt(`Porfavor indica el peso en kilogramos de la nueva marca`)
if(movimiento=="snatch"){
    snatch.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(snatch);
}
if(movimiento=="cleanAndJerk"){
    cleanAndJerk.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(cleanAndJerk);
}
if(movimiento=="clean"){
    clean.push({nombre:localStorage.nombreAtleta,marca:nuevaMarca});
    console.table(clean);
}
}


    usuarioNuevo=confirm(`¿Desea agregar otra marca?`)
    
}   while(usuarioNuevo===true)
}

    /* EVENTOS */
    calculadora.addEventListener("click",fcalculadora)    
    
    repMax.addEventListener("click",ingresarRm)
    
    
    
    
        
    
    /* 
    let primerRegistro=confirm(`Hola ${nombreAtleta}, si es tu primer registro , necesito que cargues tus repeticiones maximas de Snatch , C&J y Squat Clean `)
    if(primerRegistro===true){
        atletas.push(new Atleta(nombreAtleta,prompt(`coloque su rm de snatch`),prompt(`coloque su rm de clean`),prompt(`coloque su rm de clean and jerk`)))
    }
     */
    /* bienvenida.innerText = `Hola ${nombreAtleta} ,Bienvenida a tu app para atletas` */











