// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

/*
for (i=3; i<=22; i++) {
    if (i % 3===0) {
        console.log (i)
    }
}
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números del diez al uno.


function tarea2() {
    let i=0; 
    while (i>0 ) {
        i--;   
        console.log (i);
    }
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

/*
const NumeroUsuario=Number(prompt("Poné un número del 0 al 50"));
let ResultadoFizz;
let ResultadoBuzz;
let ResultadoFizzBuzz;
let ResultadoTotal=0;


if (ResultadoTotal===0) {
    fizz(ResultadoFizz) 
} else if (ResultadoTotal===0) {
    buzz(ResultadoBuzz) 
} else if (ResultadoTotal===0) {
    FizzBuzz(ResultadoFizzBuzz)
} else {
    console.log ("El número es positivo es: " + NumeroUsuario);
}

function fizz(ResultadoFizz) {
   //const ResultadoDeDividirDeATres=0;
   ResultadoFizz= NumeroUsuario/3;
   ResultadoTotal = ResultadoFizzBuzz;
}
function buzz(ResultadoBuzz) {
    //const ResultadoDeDividirDeACinco=0;
    ResultadoBuzz= NumeroUsuario/5;
    ResultadoTotal = ResultadoFizzBuzz;
 }
 function FizzBuzz(ResultadoFizzBuzz) {
    //const ResultadoDeDividirDeAMultiploDeCincoYTres=0;
    ResultadoFizzBuzz= NumeroUsuario/15;
    ResultadoTotal = ResultadoFizzBuzz;
 }
*/

/*
const resto=0;
const Numero3=3;
const Numero5=5;
const NumeroMultiploDe3y5= Numero3*Numero5;

for (i=0; i<=50; i++) {
    if (i===division(Numero3)){
    console.log("Fizz");
}  else if (i===division(Numero5)) {
    console.log ("Buzz");
} else if (i===division(NumeroMultiploDe3y5)) {
    resto=i/NumeroMultiploDe3y5;
    console.log("FizzBuzz");
} else {
    console.log (i);
}
}
xx|
function division(Numero3) {
return resto=i/3;
}

function division(Numero5) {
    return resto=i/5;
    }

    function division(NumeroMultiploDe3y5) {
        return resto=i/(3*5);
        }
*/


/***********************************RESULTADO FINAL***********************************/ 
/*    
for (let i=0; i<=100; i++){
    if (i % 3==0 && i % 5==0) {
        console.log ("FizzBuzz");
    } else if (i % 5==0) {
        console.log ("Buzz");
    } else if (i % 3==0) {
        console.log ("Fizz");
    } else {
        console.log(i)
    }
}
*/
/***********************************RESULTADO FINAL***********************************/ 


/*
function vereficarEdadEntrada ( edad = 18) {
    edad >=18 ? console.log ("Bienvenido al bar") : console.log ("Sos menor de edad");
}*/

   /*
    if ( edad >= 18) {
        console.log ("Bienvenido al bar");
    } else {
        console.log ("Sos menor de edad");
    }
}*/


//vereficarEdadEntrada (17);

/*
function testClase5 () {
    let x= 0;
    let y= ++x;
    let z= x++;
    console.log (z);
}

testClase5();

*/

/*
    let x=1;
    let y= "asd";

    function Test()  {

    }

    let z= function(p1) {
        console.log (p1);
        console.log ("Esta es la función z");
    }

    z (1);
*/
 
function sumar(n1,n2) {
    return n1+n2;
}

function restar (n1,n2) {
    return n1-n2;
}

function tareaOperador (funcionOperador, n1, n2) {
    console.log (funcionOperador (n1,n2));
}

tareaOperador (sumar, n1, n2);

/******************************IMPORTANTE******************************/
/******************************IMPORTANTE******************************/
/******************************IMPORTANTE******************************/
/*
Al hacer refencia el sumar, se hace referencia a la función de arriba. SI YO ESCRIBO sumar() OSEA:

tareaOperador (sumar(), n1, n2);

CON PARENTESIS, LA MÁQUINA VA A A EJECUTAR LA SUMA ADENTRO DE sumar() Y EL RESULTADO DE LA EJECUCIÓN SE LO DEVUELVE A 

function tareaOperador (funcionOperador, n1, n2) {
    console.log (funcionOperador (n1,n2));
}

Y VA A QUERER PASAR TODO COMO NaN:

function tareaOperador (funcionOperador, n1, n2) {
    console.log (NaN (n1,n2));
}

tareaOperador (NaN, n1, n2);

Y ME VA A DAR ERROR. ENTONCES SOLO TENGO QUE PASAR LA REFERENCIA A LA FUNCIÓN:

tareaOperador (sumar, n1, n2);
 

*/
/******************************IMPORTANTE******************************/
/******************************IMPORTANTE******************************/
/******************************IMPORTANTE******************************/