(function() {
    let jugadorTurno;
    let indexPregunta = 0;
    let puntaje = 0;

    
    // vamos a crear aquí las canciones que participan en el concurso 
    preguntasPosibles = [
        {nombre: "Dynamite", imagen: "../imgs/Dynamite.png"},
        {nombre: "Butter", imagen: "../imgs/Butter.jpg"},
        {nombre: "Fake Love", imagen: "../imgs/FakeLove.jpg"},
        {nombre: "Spring Day", imagen: "../imgs/SpringDay.jpg"},
        {nombre: "Boy With Luv", imagen: "../imgs/BoyWithLuv.jpg"},
        {nombre: "DNA", imagen: "../imgs/DNA.jpg"},
        {nombre: "Blood Sweat & Tears", imagen: "../imgs/BloodSweat&Tears.jpg"},
        {nombre: "MIC Drop", imagen: "../imgs/MICDrop.jpg"},
        {nombre: "IDOL", imagen: "../imgs/IDOL.jpg"},
        {nombre: "Black Swan", imagen: "../imgs/BlackSwan.jpg"},
        {nombre: "Life Goes On", imagen: "../imgs/LifeGoesOn.jpg"},
        {nombre: "Fire", imagen: "../imgs/Fire.jpg"},
        {nombre: "Save Me", imagen: "../imgs/SaveMe.jpg"},
        {nombre: "Permission to Dance", imagen: "../imgs/PermissiontoDance.png"}
    ]

    document.addEventListener("DOMContentLoaded", () => {
        jugadores = JSON.parse(localStorage.getItem("jugadores"));
        jugadorTurno = jugadores.find(player => player.jugo === false) || 0;

        if (jugadorTurno == 0){
            botonComenzar.style.display = "none";
            seccionInicio.innerHTML = "";
            seccionInicio.display = "block";

            jugadores.forEach(jugador => {
                const p = document.createElement("p");
                p.classList.add("jugadorPuntacion");
                p.innerHTML = `Jugador ${jugador.nombre}: ${jugador.puntuacion}`

                seccionInicio.appendChild(p);
            })

            const a = document.createElement("a");
            a.href = "../"
            a.textContent = "Volver al inicio";
            a.classList.add("enlace")
            seccionInicio.appendChild(a);


        } else {
            document.getElementById("bienvenida-jugador").innerHTML = `Turno de: ${jugadorTurno.nombre}`

            crearPreguntas()
            actualizarPregunta()
            

        }

        console.log(jugadorTurno)
    })

    const seccionInicio = document.getElementById("seccionInicio");
    const seccionPreguntas = document.getElementById("preguntas");
    const botonComenzar = document.getElementById("comenzarPreguntas");
    botonComenzar.addEventListener("click", () => {
        seccionInicio.style.display = "none";
        seccionPreguntas.style.display = "flex";
    })
    
    let preguntas = []
    function crearPreguntas () {
        console.log("ejecuta funcion de crear preguntas")
        usados = [];
        preguntas = [];

        let numeroRandom = 0;
        for (i = 0; i <= 9; i++) {
            do {
                numeroRandom = Math.floor(Math.random() * 14)
            } while (usados.includes(numeroRandom))
                
            usados.push(numeroRandom);
            preguntas.push(preguntasPosibles[numeroRandom]);
        }

        return preguntas;
    }

    function actualizarPregunta () {
        if (indexPregunta == 5) {
            jugadores[jugadores.indexOf(jugadorTurno)].puntuacion = puntaje;
            jugadores[jugadores.indexOf(jugadorTurno)].jugo = true;

            localStorage.setItem("jugadores", JSON.stringify(jugadores));
            indexPregunta = 0;

            window.location.reload()
        }
        jugadores.indexOf(jugadorTurno);

        const div = document.createElement("div");
        const imagen = document.createElement("img");
        imagen.src = preguntas[indexPregunta].imagen;
        imagen.classList.add("imagen-preguntas");

        const titulo = document.createElement("p");
        titulo.textContent = preguntas[indexPregunta].nombre;
        titulo.classList.add("nombre-cancion")

        div.appendChild(imagen);
        div.appendChild(titulo);

        if (indexPregunta >0) {
            seccionPreguntas.querySelector("div").remove();
        }
        seccionPreguntas.prepend(div);

        indexPregunta +=1;
        console.log(indexPregunta)
    }

    document.querySelectorAll(".boton-pregunta").forEach(
        boton => {
        boton.addEventListener("click", (e) => {
            if (e.target.id == "punto") {
                puntaje += 1;
                document.getElementById("puntuacionNumero").textContent = puntaje;

            }
            actualizarPregunta();
            
        }
        )

    })

    // aqui ira la función de cada vez cuando muestre las preguntas que se hacen

})()