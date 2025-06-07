function suma(){
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let resultado=numero1+numero2;

    document.getElementById("resultado").value=resultado;
}

function validar(){
   let usuario=document.getElementById("Usuario").value;
   let clave=document.getElementById("Clave").value;

   if (usuario=="batman" && clave=="777"){
    window.location.href="principal.html";
   }
   else {

    alert("USUARIO O CLAVE INCORRECTOS");
   }

   function operar(){
    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let resultado
    let op=document.getElementById("operar").value;
    
    if(op == suma){
        resultado = numero1 + numero2
    }
     if(op == resta){
        resultado = numero1 - numero2
    }
     if(op == division){
        resultado = numero1 / numero2
    }
     if(op == multiplicacion){
        resultado = numero1 * numero2
    }
   }
   
   function recomendar(estado) {
    let canciones = {
        feliz: [
            "Walking on Sunshine – Katrina and the Waves",
            "Happy – Pharrell Williams",
            "Vivir Mi Vida – Marc Anthony",
            "Estoy Enamorado – Wisin & Yandel"
        ],
        triste: [
            "Fix You – Coldplay",
            "Someone Like You – Adele",
            "Té Para Tres – Soda Stereo",
            "Trátame Suavemente – Gustavo Cerati"
        ],
        motivado: [
            "Eye of the Tiger – Survivor",
            "Hall of Fame – The Script",
            "Color Esperanza – Diego Torres",
            "Don't Stop Me Now – Queen"
        ],
        relajado: [
            "Weightless – Marconi Union",
            "Somewhere Over the Rainbow – Israel Kamakawiwo’ole",
            "Let Her Go – Passenger",
            "Imagine – John Lennon"
        ]
    };

    let resultadoHTML = "<h3>Canciones recomendadas:</h3><ul>";
    canciones[estado].forEach(c => {
        resultadoHTML += `<li>${c}</li>`;
    });
    resultadoHTML += "</ul>";

    document.getElementById("recomendaciones").innerHTML = resultadoHTML;
}

   }
   
 