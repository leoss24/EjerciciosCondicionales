/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.*/

let pregunta = prompt("¿Eres bellisomo/a?")

if ( pregunta == "si") {
    alert("Ciertamente");
}

else if (pregunta == "no") {
    alert("No te creo");
}