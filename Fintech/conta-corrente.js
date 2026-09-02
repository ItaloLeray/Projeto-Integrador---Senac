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
        console.log("Saldo de: " + this.nomeCliente + " R$ " + this.saldo);
    }
    depositar(valor){
        

        if (valorDeposito < 0) {
            console.log("Valor inválido, por favor insira um valor positivo!")
        } else {
            this.saldo += valorDeposito
            console.log("Valor depositado com sucesso!")
        }
    }
    sacar (valorSaque) {
        this.saldo -= valorSaque
        console.log("Saldo sacado com sucesso!")
    }


}