class Atleta{
    constructor(nombre,rmSnatch,rmClean,rmCleanAndJerk){
        this.nombre=nombre;
        this.rmSnatch=rmSnatch;
        this.rmCleanAndJerk=rmCleanAndJerk;
        this.rmClean=rmClean;
    }
}

let atletas = [{
    nombre:"facundo",
    rmSnatch:100,
    rmClean:120,
    rmCleanAndJerk:110
}]
localStorage.setItem("lista",JSON.stringify(atletas))
let snatch = []
let cleanAndJerk = []
let clean =[]
let usuarioNuevo=true
let bienvenida = document.getElementById("bienvenida");
let calculadora = document.getElementById("calculadora")
let repMax=document.getElementById("repMax")
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
/* bienvenida.innerText = `Hola ${nombreAtleta} ,Bienvenida a tu app para atletas` */

calculadora.addEventListener("click",fcalculadora)    

repMax.addEventListener("click",ingresarRm)










