

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
    
    let rango =[];
    
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) { 
            if (isEven(i)) {
                rango.push(i);
            }
        }
} else  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) { 
        if (!isEven(i)) {
            rango.push(i);
        }
        }
    } else {rango.push(num1)}


resultat += '\r\n';

resultat += `El rango es ${rango}`

}
alert (resultat);
