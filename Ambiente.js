let forma = 'circulo';

let altura = 3;
let comprimento = 4;
let raio = 5;
let pi = Math.PI;
let area;

if(forma === 'quadrado'){
    area = altura*comprimento;
} else if(forma === 'triangulo'){
    area = (altura*comprimento)/2;
} else if(forma === 'circulo'){
    area = (raio**2)*pi;
}

// truthy and falsy

// 0 => falsy
// "" => falsy
// 1 => truthy

let minhavar = null
let outravar;

//Conversão Implícita (Number e String)

let numero = 45;
let stringComNumero = '45';
let concatenada = numero + stringComNumero;
// console.log(`"Concatenada" é do tipo ${typeof concatenada}.`, 'Seu valor é ' + concatenada);

//Conversão Explícita (Number e String)

let soma = numero + +(stringComNumero); //O sinal de adição (+) antes da string converte seu valor em number 
// console.log(`"Soma" é do tipo ${typeof soma}. Seu valor é ${soma}`); 
let numeroStringado = String(numero);
// console.log(`"numeroStringado" é do tipo ${typeof numeroStringado}. Seu valor é ${numeroStringado}`)

// console.log(typeof parseFloat(numero).toFixed(2))

//Conversão Explícita de booleanos
let booleano = false;
// console.log(Number(booleano));

const piano = 3.14

{
    const piano = true;
    let booleano = 42;
    console.log(piano, booleano)
}
console.log(piano, booleano)

minhavar = true;
minhavar= 5;
console.log(minhavar)
minhavar = 'Uma string'
console.log(minhavar)