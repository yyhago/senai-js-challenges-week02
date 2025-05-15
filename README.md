# 🚀 Exercícios de Estruturas de Controle - SENAI

Este repositório contém implementações dos exercícios da segunda semana de desafios de JavaScript desenvolvidos no curso de Desenvolvimento de Software do SENAI, focando nas estruturas de controle (`for`, `while`, `do-while`).

## 📑 Sumário
- [Descrição dos Exercícios](#-descrição-dos-exercícios)
- [Desafios com Estruturas de Repetição](#-desafios-com-estruturas-de-repetição)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Contribuições](#-contribuições)

## 📝 Descrição dos Exercícios

### 1) Sorteio de Números
Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e mostre na tela:
- Quais foram os números sorteados
- Quantos números estão acima de 5
- Quantos números são divisíveis por 3

### 2) Análise de Idades
Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
- Qual é a média de idade do grupo
- Quantas pessoas têm mais de 18 anos
- Quantas pessoas têm menos de 5 anos
- Qual foi a maior idade lida

### 3) Cadastro de Pessoas
Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
- Quantos homens foram cadastrados
- Quantas mulheres foram cadastradas
- A média de idade do grupo
- A média de idade dos homens
- Quantas mulheres têm mais de 20 anos

### 4) Análise Física
Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando no final:
- Qual foi a média de altura do grupo
- Quantas pessoas pesam mais de 90Kg
- Quantas pessoas que pesam menos de 50Kg têm menos de 1.60m
- Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg

## 🔄 Desafios com Estruturas de Repetição

### Exercícios com `for`:

**1.** Crie um programa que calcule e exiba a soma dos números de 1 a 100.

**2.** Escreva um programa que receba um número inteiro positivo e calcule seu fatorial.

### Exercícios com `while`:

**3.** Faça um programa que peça ao usuário uma senha. Enquanto ele digitar a senha errada, o programa deve continuar pedindo a senha. Quando acertar, exiba "Acesso permitido".

**4.** Peça um número positivo ao usuário e use while para exibir uma contagem regressiva até zero.

**5.** Peça ao usuário para digitar números inteiros. Some todos os números digitados até que ele digite 0. Exiba o total ao final.

### Exercícios com `do-while`:

**6.** Crie um menu com as opções:
```
1) Ver saldo
2) Fazer depósito
3) Sair
```
O menu deve ser exibido até o usuário escolher a opção 3.

**7.** Peça uma nota de 0 a 10 para o usuário. Continue pedindo até que ele digite uma nota válida.

**8.** Escreva um programa que pergunte ao usuário se deseja continuar executando o programa (S/N). O programa deve repetir enquanto o usuário digitar "S".

**9.** O usuário deve digitar números positivos. O programa calcula a média. Pergunte ao final: "Deseja inserir outro número?", continue a execução até que ele informe que NÃO.

## 💻 Tecnologias Utilizadas
- **JavaScript (ES6+)**: Linguagem principal para implementação dos algoritmos
- **Node.js**: Ambiente de execução para os scripts

## 📂 Estrutura do Projeto
```
senai-js-challenges-week02/
├── basicos/
│   ├── ex01_sorteio.js
│   ├── ex02_idades.js
│   ├── ex03_cadastro.js
│   └── ex04_analise.js
├── estruturas-repeticao/
│   ├── for/
│   │   ├── ex01_soma.js
│   │   └── ex02_fatorial.js
│   ├── while/
│   │   ├── ex03_senha.js
│   │   ├── ex04_regressiva.js
│   │   └── ex05_soma.js
│   └── do-while/
│       ├── ex06_menu.js
│       ├── ex07_nota.js
│       ├── ex08_continuar.js
│       └── ex09_media.js
└── README.md
```

## ▶️ Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/yyhago/senai-js-challenges-week02.git
   cd senai-js-challenges-week02
   ```

2. Execute qualquer exercício usando Node.js:
   ```bash
   node basicos/ex01_sorteio.js
   ```

3. Alternativamente, você pode executar os scripts no console do navegador carregando os arquivos HTML correspondentes.

## 🤝 Contribuições
Contribuições são bem-vindas! Se você quiser melhorar algum algoritmo ou adicionar novos exercícios:

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/NovoExercicio`)
3. Commit suas alterações (`git commit -m 'Adiciona novo exercício de loops'`)
4. Push para a branch (`git push origin feature/NovoExercicio`)
5. Abra um Pull Request

---

Exercício desenvolvido como parte do curso de Desenvolvimento de Software do SENAI - 2025.