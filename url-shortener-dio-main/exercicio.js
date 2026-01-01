let lines = gets().split("\n");        // Lê a entrada
let num = parseInt(lines.shift());     // Converte para inteiro

let init = num % 2 === 0 ? num + 1 : num; // Garante que começa em um número ímpar

for (let i = 0; i < 6; i++) {           // Repete 6 vezes
    print(init);                        // Imprime o número ímpar atual
    init = init + 2;                   // Vai para o próximo ímpar
}
