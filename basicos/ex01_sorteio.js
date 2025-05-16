// 1) Sorteio de Números - Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e mostre na tela:

// Quais foram os números sorteados
// Quantos números estão acima de 5
// Quantos números são divisíveis por 3


let numeroSorteado;
let acimaDeCinco = 0;
let divisivelPorTres = 0;

for(let i = 0; i < 20; i++){
    
    numeroSorteado = Math.ceil(Math.random() * 10);
    console.log(`Números sorteados: ${numeroSorteado}`);


    if (numeroSorteado > 5){
        contadorNumeroMaiorQueCinco+=1;
    }

    if (numeroSorteado % 3 == 0){
        numerosDivisiveisPorTres+=1;
    }

}

console.log(`Total de números acima de 5: ${acimaDeCinco}`);
console.log(`Números divisíveis por 3: ${divisivelPorTres}`);