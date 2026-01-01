//o omit serve para omitir propriedades de um tipo
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
    nacionalidade: 'brasileira';
}
//o extends serve para estender uma interface, ou seja, criar uma nova interface baseada em outra

const brasileiro : Brasileiro = {
    nome: 'João',
    idade: 19,
    nacionalidade: 'brasileira'
}
//acessar o typescript documentation para mais informações sobre o omit
