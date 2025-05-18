// 8. Escreva um programa que pergunte ao usuário se deseja continuar executando o programa (S/N). 
// O programa deve repetir enquanto o usuário digitar "S".

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputUsuario = true

do {
    
    inputUsuario = prompt("Deseja continuar executando o programa (S/N)")

    if (inputUsuario == "S"){
        continue
    } else {
        break
    }

} while (inputUsuario);