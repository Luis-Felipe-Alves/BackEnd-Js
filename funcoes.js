
//Funções COM Parâmetros

function contas(primeiroNum = 1, segundoNum = 2, tercNum = 3){
    
    let somados = (primeiroNum + segundoNum + tercNum);

    return somados
}

let num1 = 12;
let num2 = 15;
let num3 = 9;

function daFruta(soma){

    if(typeof soma === 'number'){
        let media = soma / 3;
        console.log(`A média é ${media}.`, typeof soma);

    } else {
        
        console.error(new Error ('Num deu...'), typeof soma);
    }
}

daFruta(contas());

//Funções SEM Parâmetros

function soma(){
    return 2 + 2;
}

//Funções COM parâmetros E retorno

function cumprimenta(){
    return 'Oi, gente!';
}

function apresentar(nome){

    console.log(`${cumprimenta()} Meu nome é ${nome}`)
}

let nome = 'Denny'
apresentar(nome);

//Funções Anônimas (Arrow Functions)

const funcao = numero => console.log(numero * 2)

funcao(90);