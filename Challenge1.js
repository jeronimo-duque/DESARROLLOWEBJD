//Challenge1 Jeronimo Andres Duque Laverde

//estas funciones tienen diferencias como:

//Flecha Sintaxis concisa: () => en lugar de function =/= Regular Sintaxis tradicional: Usan la palabra clave function.
//flecha Sin propio this: Usa contexto léxico =/= Regular Tienen su propio this.
//flecha No se pueden usar con new =/= Regular Pueden usarse con new.
//flecha Sin argumento arguments =/= Regular Tienen argumento arguments.
//flecha No adecuadas para métodos de objeto =/= Regular Adecuadas para métodos de objeto.


//Ejemplo de función Regular:
function VerificaNum(num){
  if (num % 2 == 0){
    console.log(num + " es un numero par");
  } else {
    console.log(num +" es un numero impar");
  }
}

VerificaNum(11);


//Ejemplo de funcion tipo felcha
const VerificaNumArrow = (num) => {
  if (num % 2 === 0) {
    console.log(num +" es un número par");
  } else {
    console.log(num +" es un número impar");
  }
};

VerificaNumArrow (8);