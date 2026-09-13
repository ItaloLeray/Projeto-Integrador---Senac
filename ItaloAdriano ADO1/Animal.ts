export class Iguana {
    peso : number;
    altura : number;
    nome : string;

    constructor(peso: number, altura: number, nome : string) {
        this.peso = peso;
        this.altura = altura;
        this.nome = nome

    }

    comer() {
        console.log("A iguana está comendo!");
        
    }

    andar() {
        console.log("A iguana está andando!");
        
    }
}

    const iguana1 = new Iguana(2, 3, "Jorge");
    const iguana2 = new Iguana(5, 10, "Clécio");

    console.log(iguana1);
    console.log(iguana2);
    
    iguana1.comer()
    iguana1.andar()
    
    