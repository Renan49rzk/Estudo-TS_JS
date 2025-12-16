interface Cachorro {
    nome: string;
     idade: number;
     parqueFavorito?: string;

}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}
//mapeando o tipo Cachorro, e definindo que todas as suas propriedades são somente leitura
// keyof percorre todas as chaves do tipo Cachorro
// K é uma variável genérica que representa cada chave do tipo Cachorro
// Cachorro[K] é o tipo da propriedade K do tipo Cachorro
//o reandoly torna as propriedades inacessíveis para atribuição fora da definição do objeto

class MeuCachorro implements Cachorro {
     idade;
     nome;
//o private torna o atributo inacessível fora da classe 
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('max', 4);

//-? remove os valores opcionais do tipo Cachorro