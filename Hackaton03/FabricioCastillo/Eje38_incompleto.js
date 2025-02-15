//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    return sumaDivisores === numero;
  }
  
  const numero = 28;
  const esPerfecto = esNumeroPerfecto(numero);
  
  if (esPerfecto) {
    console.log(numero, "es un número perfecto.");
  } else 
    console.log(numero, "no es un número perfecto.");