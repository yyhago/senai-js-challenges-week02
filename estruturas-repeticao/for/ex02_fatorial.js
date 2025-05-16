// 2. Escreva um programa que receba um número inteiro positivo e calcule seu fatorial.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ


let inputUsuario = Number(prompt("Digite um número inteiro positivo: "));
let resultado = 1;

for(let i = inputUsuario; i > 0; i--){
    resultado *= i;
}

console.log(`O fatorial de ${inputUsuario} é ${resultado}`)