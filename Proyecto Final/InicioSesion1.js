/* VARIABLES */
const   $btnSignIn= document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),  
        $signUp = document.querySelector('.sign-up'),
        $signIn  = document.querySelector('.sign-in'),
        login =document.getElementById("login"),
        nombreAtleta = document.getElementById("nombreAtleta"),
        formularioAtleta = document.getElementById("formulario-atleta");




/* FUNCIONES */

        function direccionar(){
                location.href="index.html"
        }




/* EVENTOS */


        document.addEventListener('click', e => {
            if (e.target === $btnSignIn || e.target === $btnSignUp) {
                $signIn.classList.toggle('active');
                $signUp.classList.toggle('active')
            }
        });

        login.addEventListener("click",direccionar)

        formularioAtleta.addEventListener("submit", (e) => {
            e.preventDefault();

            localStorage.setItem("nombreAtleta", nombreAtleta.value);

            direccionar();

        });

