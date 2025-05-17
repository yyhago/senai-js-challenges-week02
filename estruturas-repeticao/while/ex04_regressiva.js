// 4. Peça um número positivo ao usuário e use while para exibir uma contagem regressiva até zero.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputUsuario = Number(prompt("Me veja um número positivo e inteiro:"));

while(inputUsuario > 0){
    for(let i = inputUsuario; i > 0; i--){
        console.log(inputUsuario--);
    }
}