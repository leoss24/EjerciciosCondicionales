/* 9. Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping.*/

let usuario = (prompt("Elige el topping para tu helado"));

let helado = parseInt("50 MXN");
let oreo = parseInt("10 MXN");
let kitkat = parseInt("15 MXN");
let brownie = parseInt("20 MXN");

if (usuario == "oreo") {
    document.write(`El helado con topping de oreo te cuesta ${helado + oreo} MXN`);
}
else if (usuario == "kitkat") {
    document.write(`El helado con topping de kitkat te cuesta ${helado + kitkat} MXN`);
}
else if (usuario == "brownie") {
    document.write(`El helado con topping de brownie te cuesta ${helado + brownie} MXN`);
}
else {
    document.write("No tenemos este topping, lo sentimos. <br> Tu helado sin topping cuesta $ 50 MXN");
}