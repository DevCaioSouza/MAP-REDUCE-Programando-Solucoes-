//MAP --------------------------

let numeros = [2, 4, 6]; //serve para ambos exercícios
   let dobro = numeros.map(function(numero){
   return numero * 2;
});

// console.log(numeros); 
// console.log(dobro);

//REDUCE -----------------------


let total = numeros.reduce((acumulador, numero)=>{
  return acumulador += numero;
}, 0)

console.log(total)

// "acumulador" contém a soma a cada posição
// "numero" contém cada posição do array
// o "0" informa em qual número deve começar a soma