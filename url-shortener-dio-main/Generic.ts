//Generic types

function adicionarAprendiceALista<NAOSEI>(array: any[] , valor: NAOSEI) {
    return array.map(item => item + valor);
}

adicionarAprendiceALista([1, 2 , 3], 'd'); //['A', 'B', 'C', 'D']
// o tipo NAOSEI é definido no momento em que a função é chamada, nesse caso, como string
//se fosse number, o valor deveria ser um número
// o any aceita qualquer tipo, o que não é interessante, pois perde-se a tipagem
// com o generic, o tipo é definido no momento da chamada da função, mantendo a tipagem
// array é um array de qualquer tipo, e valor é do tipo NAOSEI, que será definido na chamada da função
// a vantagem do generic é que ele mantém a tipagem, diferente do any, que aceita qualquer tipo, perdendo a tipagem;
