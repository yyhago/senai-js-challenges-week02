// 3) Cadastro de Pessoas - Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:

// Quantos homens foram cadastrados
// Quantas mulheres foram cadastradas
// A média de idade do grupo
// A média de idade dos homens
// Quantas mulheres têm mais de 20 anos

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let nomesHomem = [];
let idadesHomem = [];

let nomesMulher = [];
let idadesMulher = [];

let sexo;

let contadorHomem = 0;
let contadorMulher = 0;
let totalPessoas = 0;

let soma = 0;
let somaHomens = 0;

let mediaHomens = 0;
let mediaIdade = 0;
let maiorVinteAnos = 0;


for(let i = 0; i < 5; i++){

    sexo = prompt("Qual é seu sexo? (Homem | Mulher)");

    if(sexo == "Homem"){
        const nomeInput = prompt("Digite seu nome:");
        nomesHomem.push(nomeInput);

        const idadeInput = Number(prompt("Digite sua idade:"));
        idadesHomem.push(idadeInput);

        contadorHomem+=1;

    } else if (sexo == "Mulher"){
        const nomeInput = prompt("Digite seu nome:");
        nomesMulher.push(nomeInput);

        const idadeInput = Number(prompt("Digite sua idade:"));
        idadesMulher.push(idadeInput);

        contadorMulher+=1;

        if (idadeInput > 20){
            maiorVinteAnos+=1;
        }

    }
}

for (let i = 0; i < idadesHomem.length; i++) {
    somaHomens += idadesHomem[i];
}

for(let i = 0; i < idadesHomem.length; i++){
    soma += idadesHomem[i];
}

for(let i = 0; i < idadesMulher.length; i++){
    soma += idadesMulher[i];
}


totalPessoas = (contadorHomem + contadorMulher);
mediaIdade = soma / totalPessoas;

mediaHomens = somaHomens / contadorHomem;


console.log(`Foram cadastrados ${contadorHomem} homens`);
console.log(`Foram cadastradas ${contadorMulher} mulheres`);

console.log(`Média de idade do grupo: ${mediaIdade}`);

console.log(`Média de idade dos homens: ${mediaHomens}`);
console.log(`Quantidade de mulheres com mais de 20 anos: ${maiorVinteAnos}`);