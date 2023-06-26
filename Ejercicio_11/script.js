/* 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.*/

let vehículo = prompt("¿Que tipo de vehículo tienes? \n\ Coche \n\ Moto \n\ Autobús");
let kmsRecorridos = parseInt(prompt("¿Cuantos kilometros recorrio el vehículo"));
let litrosConsumidos = parseInt(prompt("Cuantos litros consumo el vehículo"));

let precioKilometro;



if (vehículo === "coche"){
    precioKilometro = 0.20;
}
else if (vehículo === "moto"){
    precioKilometro = 0.10;
}
else if (vehículo === "autobus"){
    precioKilometro = 0.5;
}

if (litrosConsumidos < 100){
    litrosConsumidos = 5;
}
else if (litrosConsumidos > 100){
    litrosConsumidos = 10;
}

let totalPagar = (precioKilometro * kmsRecorridos) + litrosConsumidos;

document.write(`El valor total a pagar es ${totalPagar} con cargo extra por litros consumidos de ${litrosConsumidos}`);