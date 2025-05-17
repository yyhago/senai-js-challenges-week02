// 5. Peça ao usuário para digitar números inteiros. 
// Some todos os números digitados até que ele digite 0. Exiba o total ao final.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let somaNumeros = 0;

while(true){

    const inputNumerosInteiros = Number(prompt("Digite números inteiros e positivos: (0 - Sair)"))
    somaNumeros += inputNumerosInteiros

    if (inputNumerosInteiros == 0){
        console.log(`Encerrando, a soma de tudo deu: ${somaNumeros}`)
        break
    }
}
