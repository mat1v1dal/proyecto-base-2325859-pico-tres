function suma(){
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let resultado=numero1+numero2;

    document.getElementById("resultado").value=resultado;
}

function afiliar(){
    let nombre=document.getElementById("Nombre").value;
    let apellido=document.getElementById("Apellido").value;
    let dni=document.getElementById("DNI").value;


    if (nombre=="" || apellido=="" || dni==""){
        alert("Por favor, complete todos los campos.");
        return;
    }
    if (dni.length != 8 || isNaN(dni) || dni < 0) {
        alert("El DNI debe tener 8 dígitos numéricos y mayores a 0.");
        return;
    }

    alert("¡Felicidades " + nombre + "! Te has afiliado correctamente.");
}

function validar(){
    let usuario=document.getElementById("Usuario").value;
    let clave=document.getElementById("Clave").value;

    if (usuario=="music" && clave=="finder"){
    window.location.href="principal.html";
    }
    else {

    alert("USUARIO O CLAVE INCORRECTOS");
    }
}
function recomendar(estado) {
    let canciones = {
        feliz: [
            { nombre: "Walking on Sunshine – Katrina and the Waves", url: "https://www.youtube.com/watch?v=iPUmE-tne5U" },
            { nombre: "Happy – Pharrell Williams", url: "https://www.youtube.com/watch?v=y6Sxv-sUYtM" },
            { nombre: "Vivir Mi Vida – Marc Anthony", url: "https://www.youtube.com/watch?v=YXnjy5YlDwk" },
            { nombre: "Estoy Enamorado – Wisin & Yandel", url: "https://www.youtube.com/watch?v=v0U1X3y3Kf4" }
        ],
        triste: [
            { nombre: "Fix You – Coldplay", url: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
            { nombre: "Someone Like You – Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
            { nombre: "Té Para Tres – Soda Stereo", url: "https://www.youtube.com/watch?v=hmZpUuPjZxQ" },
            { nombre: "Trátame Suavemente – Gustavo Cerati", url: "https://www.youtube.com/watch?v=4gE6XzbR_3s" }
        ],
        motivado: [
            { nombre: "Eye of the Tiger – Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
            { nombre: "Hall of Fame – The Script", url: "https://www.youtube.com/watch?v=mk48xRzuNvA" },
            { nombre: "Color Esperanza – Diego Torres", url: "https://www.youtube.com/watch?v=NbX3RHDG8T4" },
            { nombre: "Don't Stop Me Now – Queen", url: "https://www.youtube.com/watch?v=HgzGwKwLmgM" }
        ],
        relajado: [
            { nombre: "Weightless – Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
            { nombre: "Somewhere Over the Rainbow – Israel Kamakawiwo’ole", url: "https://www.youtube.com/watch?v=V1bFr2SWP1I" },
            { nombre: "Let Her Go – Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
            { nombre: "Imagine – John Lennon", url: "https://www.youtube.com/watch?v=YkgkThdzX-8" }
        ]
    };

    let resultadoHTML = "<h3>Canciones recomendadas:</h3><ul>";
    canciones[estado].forEach(c => {
        resultadoHTML += `<li><a href="${c.url}" target="_blank">${c.nombre}</a></li>`;
    });
    resultadoHTML += "</ul>";

    document.getElementById("recomendaciones").innerHTML = resultadoHTML;
}