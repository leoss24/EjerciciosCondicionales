/* 10. Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 mese*/

let programa = prompt("Elige el nivel de tu programa: \n\ 1. Course \n\ 2. Carrera \n\ 3. Master");
let costoTotal;
let costoMes;
let beca;
let nombreBeca;

if (programa.toLowerCase() == "course"){
    costoMes = 4999;
    costoTotal = costoMes * 2;
    beca = prompt("¿Cuentas con alguna beca");
}
else if (programa.toUpperCase() == "carrera"){
    costoMes = 4999;
    costoTotal = costoMes * 6;
    beca = prompt("¿Cuentas con alguna beca");
}
else if (programa.toUpperCase() == "master"){
    costoMes = 4999;
    costoTotal = costoMes * 12;
    beca = prompt("¿Cuentas con alguna beca");
}

if (beca.toLowerCase() == "si"){
    nombreBeca = prompt("¿Tienes algna beca? \n\ 4. Facebook \n\ 5. Google \n\ 6. Jesua")

    if (nombreBeca.toLowerCase() == "facebook"){
        costoMes = costoMes * 0.85;
        costoTotal = costoTotal * 0.85;
    }
    else if (nombreBeca.toLowerCase() == "google"){
        costoMes = costoMes * 0.75;
        costoTotal = costoTotal * 0.75;
    }
    if (nombreBeca.toLowerCase() == "jesua"){
        costoMes = costoMes * 0.50;
        costoTotal = costoTotal * 0.50;
    }
}

alert(`El costo mensual con desacuento es ${costoMes} y el costo total del curso es ${costoTotal}`);