// 3. Faça um programa que peça ao usuário uma senha. 
// Enquanto ele digitar a senha errada, o programa deve continuar pedindo a senha. 
// Quando acertar, exiba "Acesso permitido".

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ

let inputUsuario;
let ativo = true;
const senha = "adm123";

while (ativo){

    inputUsuario = prompt("Senha: ")

    if(inputUsuario != senha){
        alert("Acesso negado. Tente novamente!")
        continue
    } else{
        alert("Acesso permitido")
        break
    }

}