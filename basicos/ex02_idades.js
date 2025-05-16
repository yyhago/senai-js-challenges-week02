// 2) Análise de Idades - Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:

// Qual é a média de idade do grupo
// Quantas pessoas têm mais de 18 anos
// Quantas pessoas têm menos de 5 anos
// Qual foi a maior idade lida

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let idades = [];
let somaIdades = 0;
let mediaIdades = 0;

let maiorIdade = 0;
let maiorDezoito = 0;
let menosDeCinco = 0;

for(let i = 0; i < 20; i++){
    const idadesInput = parseInt(prompt("Digite as idades:"));
    idades.push(idadesInput);

    somaIdades += idadesInput;
    mediaIdades = somaIdades / idades.length;

    if(idadesInput > 18){
        maiorDezoito+=1;
    } else if(idadesInput < 5){
        menosDeCinco+=1;
    }

    if(idadesInput > maiorIdade){
        maiorIdade = idadesInput;
    }

}

console.log(`Todas idades: ${idades}`);

console.log(`Média das idades: ${mediaIdades}`);
console.log(`Maiores de 18: ${maiorDezoito}`);
console.log(`Menor de 5: ${menosDeCinco}`);

console.log(`Maior idade LIDA: ${maiorIdade}`);