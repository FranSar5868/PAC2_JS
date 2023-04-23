

let num1 = +prompt ('Entra el valor de num1 si us plau');
console.log(num1);

let num2 = +prompt ('Entra el valor de num2 si us plau');
console.log(num2);

let resultat = '';
let entrada_incorrecta = false;

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

if ((num1 % 1 !== 0) || num1<1 || num1>50 || (num2 % 1 !== 0) || num2<1 || num2>50) {
    resultat += 'Ho sento pero els valors introduits han de ser números sencers positius entre 1 i 50'
    entrada_incorrecta = true;
}

if (entrada_incorrecta==false) {
    resultat += 'El resultat del exercici és: ' + '\n';

    resultat += `La suma dels dos números és: ${num1 + num2}\r\n`;

    if (isPrime(num1)) {
        resultat += `El número ${num1} es primo `
    }else (resultat += `El número ${num1} NO es primo `)
    if (isPrime(num2)) {
        resultat += `y el número ${num2} es primo`
    }else (resultat += `y el número ${num2} NO es primo`)

    resultat += '\r\n';

    if (isEven(num1)) {
        resultat += `El número ${num1} es par `
    }else (resultat += `El número ${num1} es impar `)
    if (isEven(num2)) {
        resultat += `y el número ${num2} es par`
    }else (resultat += `y el número ${num2} es impar`)
    

}



console.log(resultat, entrada_incorrecta);


alert (resultat);


// var texto = document.getElementById('title');
// console.log(texto);

// var a = +prompt ('Entra el valor de a');
// var b = parseInt(prompt ('Entra el valor de b'));

// function sumar () {
//     let suma = a + b;
//     alert("la suma es de " + suma +"\n");
//     return suma
// }


// // if ( sumar() >=15 )
// // {
// //     console.log('la suma de ' + a + ' + ' + b +' es igual o mayor que 15' + '\n');
// // } else {
// //     console.log('la suma de ' + a + ' + ' + b +' es inferior a 15' + '\n');
// // }


// // ( sumar() >=15 ) ? alert('la suma de ' + a + ' + ' + b +' es igual o mayor que 15 😂 ' +'\n') : alert('la suma de ' + a + ' + ' + b +' es inferior a 15 ' + '\n');

// let c = 5;
// let d = 10;
// console.log(`La suma de ${c} y ${d} es ${c+d}`);
