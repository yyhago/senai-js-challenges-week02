// 6. Crie um menu com as opções:
// 1) Ver saldo
// 2) Fazer depósito
// 3) Sair
// O menu deve ser exibido até o usuário escolher a opção 3.

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputUsuario;

do {

    inputUsuario = Number(prompt(`
        1) Ver saldo
        2) Fazer depósito
        3) Sair
        `));

    if(inputUsuario == 1){
        alert("Seu saldo é de R$ 200.00");
        continue;
    } else if(inputUsuario == 2){
        alert("Nosso banco se encontra em manutenção\nFaça seu deposito mais tarde!");
        continue;
    } else if(inputUsuario == 3){
        break;
    }

} while (true);