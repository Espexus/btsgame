(function() {

    document.getElementById("crear-juego").addEventListener("click", () => {
        document.getElementById("formulario-cantidad-espacio").style.display = "block";
    })
    let cantidadJugadores = 0;

    const formularioCantidad = document.getElementById("cantidad-jugadores");
    formularioCantidad.addEventListener("submit", (e) => {
        e.preventDefault();

        const datosCantidad = new FormData(formularioCantidad);
        cantidadJugadores = datosCantidad.get("cantidad");

        crearEspaciosJugadores(cantidadJugadores);

    })

    const formularioJugadores = document.getElementById("formulario-jugadores");
    function crearEspaciosJugadores (cantidad) {
        formularioJugadores.innerHTML = "";
        for (i = 1; i <= cantidad ; i++) {
            const espacioJugador = document.createElement("input");
            espacioJugador.type = "text";
            espacioJugador.placeholder = `Jugador ${i}`

            formularioJugadores.appendChild(espacioJugador);
            
        }

        const botonComenzar = document.createElement("input");
        botonComenzar.type = "submit";
        botonComenzar.value = "Comenzar";
        formularioJugadores.appendChild(botonComenzar);

        document.getElementById("formulario-jugadores-espacio").style.display = "block";
    }

    // aqui va a ir ahora la parte de registrar los jugadores
    formularioJugadores.addEventListener("submit", (e) => {
        e.preventDefault();
        let jugadores = [];

        formularioJugadores.querySelectorAll('input[type="text"]').forEach(jugador => {
            const nombreJugador = jugador.value || jugador.placeholder;
            let jugadorNuevo = {
                nombre: nombreJugador,
                puntuacion: 0
            }

            jugadores.push(jugadorNuevo)
            localStorage.setItem("jugadores", JSON.stringify(jugadores));
        })

        window.location.href = "html/jugar.html"
    })


})()