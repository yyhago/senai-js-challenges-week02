// 4) Análise Física | Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando no final:

// Qual foi a média de altura do grupo
// Quantas pessoas pesam mais de 90Kg
// Quantas pessoas que pesam menos de 50Kg têm menos de 1.60m
// Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

// OBS: ESTE EXERCÍCIO NECESSITA DE UM .HTML QUE ESTÁ NA RAIZ


let peso = [];
let altura = [];

let somaAltura = 0;
let mediaAltura = 0;

let contadorNoventaQuilos = 0;
let menosCinquentaEUmMetroEMeio = 0;
let medeMaisQueUmENoventaECemQuilos = 0;

for(let i = 0; i < 7; i++){

    const pesoInput = parseFloat(prompt("Digite seu peso: "));
    peso.push(pesoInput);

    if(pesoInput > 90){
        contadorNoventaQuilos+=1;
    }

    const alturaInput = parseFloat(prompt("Digite sua altura: "));
    altura.push(alturaInput);

    if (pesoInput < 50 && alturaInput < 1.60){
        menosCinquentaEUmMetroEMeio+=1;
    }

    if (alturaInput > 1.90 && pesoInput > 100){
        medeMaisQueUmENoventaECemQuilos+=1;
    }

}

for(let i = 0; i < altura.length; i++){
    somaAltura += altura[i];
}
mediaAltura = somaAltura / altura.length;



console.log(`Media de altura do grupo: ${mediaAltura}`);
console.log(`Total de pessoas que pesam +90Quilos: ${contadorNoventaQuilos}`);
console.log(`Total que pesam menos de 50Kg têm menos de 1.60m: ${menosCinquentaEUmMetroEMeio}`);
console.log(`Total de pessoas que medem mais de 1.90m pesam mais de 100Kg${medeMaisQueUmENoventaECemQuilos}`);