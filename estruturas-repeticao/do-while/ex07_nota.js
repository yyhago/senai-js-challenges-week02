// 7. Peça uma nota de 0 a 10 para o usuário. Continue pedindo até que ele digite uma nota válida.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputNota;

do {
    inputNota = Number(prompt("Digite sua nota: (0 - 10)"));

    if (inputNota < 0){
        alert("Nota inválida")
        break
    }

} while (inputNota >= 0);