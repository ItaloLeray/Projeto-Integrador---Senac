export class ContaCorrente {
    //Atributos ou propriedades
    numero
    nomeCliente
    saldo

    constructor(pNumero, pNome, pSaldo = 0) {
        this.numero = pNumero
        this.nomeCliente = pNome
        this.saldo = pSaldo
    }

    //Métodos ou funções - Ações da classe

    consultarSaldo() {
        console.log("Saldo atual: R$ " + this.saldo);
    }


}