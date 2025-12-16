/*

function soma(a: number, b: number): number {
    return a + b;
}   
// types
//interfaces (são parecidas com types, mas são mais usadas para definir a forma de objetos e classes)

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;

}
*/
//diferentemente de interfaces, types podem definir outros tipos alem de objetos, como union types, por exemplo:
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    executarRugido(alturaEmDecibeis: number): void;
};

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    porte: 'medio',
    domestico: true,
    visaoNoturna: false,
    executarRugido(alturaEmDecibeis: number) {
        console.log(`${alturaEmDecibeis}dB`);
    }
};
//está definido que a constante pode ser tanto um IFelino quanto um ICanino, mas não ambos ao mesmo tempo

const animal2: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre', 
    domestico: false,
    executarRugido(alturaEmDecibeis: number) {
        console.log(`${alturaEmDecibeis}dB`);
    }
}

animal2.executarRugido(80);
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: true,
    visaoNoturna: true,
    executarRugido(alturaEmDecibeis: number) {
        console.log(`${alturaEmDecibeis}dB`);
    }
};