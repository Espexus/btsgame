(function() {
    let jugadorTurno;
    
    // vamos a crear aquí las canciones que participan en el concurso 
    preguntasPosibles = [
        {nombre: "Dynamite", imagen: "imgs/Dynamite.jpg"},
        {nombre: "Butter", imagen: "imgs/Butter.jpg"},
        {nombre: "Fake Love", imagen: "imgs/Fake Love.jpg"},
        {nombre: "Spring Day", imagen: "imgs/Spring Day.jpg"},
        {nombre: "Boy With Luv", imagen: "imgs/Boy With Luv.jpg"},
        {nombre: "DNA", imagen: "imgs/DNA.jpg"},
        {nombre: "Blood Sweat & Tears", imagen: "imgs/Blood Sweat & Tears.jpg"},
        {nombre: "MIC Drop", imagen: "imgs/MIC Drop.jpg"},
        {nombre: "IDOL", imagen: "imgs/IDOL.jpg"},
        {nombre: "Black Swan", imagen: "imgs/Black Swan.jpg"},
        {nombre: "Life Goes On", imagen: "imgs/Life Goes On.jpg"},
        {nombre: "Fire", imagen: "imgs/Fire.jpg"},
        {nombre: "Save Me", imagen: "imgs/Save Me.jpg"},
        {nombre: "Permission to Dance", imagen: "imgs/Permission to Dance.jpg"}
    ]

    document.addEventListener("DOMContentLoaded", () => {
        jugadores = JSON.parse(localStorage.getItem("jugadores"));
        jugadorTurno = jugadores.find(player => player.jugo === false) || 0;

        if (jugadorTurno == 0){
            botonComenzar.style.display = "none";

            jugadores.forEach(jugador => {
                const p = document.createElement("p");
                p.classList.add("jugadorPuntacion");
                p.innerHTML = `Jugador ${jugador.nombre}: ${jugador.puntuacion}`
            })
        } else {
            document.getElementById("bienvenida-jugador").innerHTML = `Turno de: ${jugadorTurno.nombre}`

            crearPreguntas()
        }

        console.log(jugadorTurno)
    })

    const seccionInicio = document.getElementById("seccionInicio");
    const seccionPreguntas = document.getElementById("preguntas");
    const botonComenzar = document.getElementById("comenzarPreguntas");
    botonComenzar.addEventListener("click", () => {
        seccionInicio.style.display = "none";
        seccionPreguntas.style.display = "block";
    })

    function crearPreguntas () {
        console.log("ejecuta funcion de crear preguntas")
        const preguntas = []
        usados = [];
        let numeroRandom = 0;
        for (i = 0; i <= 10; i++) {
            do {
                numeroRandom = Math.floor(Math.random() * 14)
            } while (usados.includes(numeroRandom))
                
            usados.push(numeroRandom);
            preguntas.push(preguntasPosibles[numeroRandom]);
        }

        console.log(preguntas);
    }

    const indexPregunta = 0;
    // aqui ira la función de cada vez cuando muestre las preguntas que se hacen

})()