// 9. O usuário deve digitar números positivos. 
// O programa calcula a média. Pergunte ao final: "Deseja inserir outro número?"
// continue a execução até que ele informe que NÃO.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputUsuario = [];
let segundoNumero;
let soma = 0;
let media = 0;


do {

    const inputNumeroUsuario = Number(prompt("Digite número positivo e inteiro: "))
    inputUsuario.push(inputNumeroUsuario)

    soma+=inputNumeroUsuario
    media = soma / inputUsuario.length
    

    segundoNumero = prompt("Deseja inserir outro número? (SIM - NÃO)")

    if(segundoNumero == "SIM"){
        continue
    } else if(segundoNumero == "NÃO"){
        alert(`Sua média ${media}`)
        break
    }


    
} while (true);