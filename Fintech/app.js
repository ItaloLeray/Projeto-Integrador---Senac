import { ContaCorrente } from './conta-corrente.js';

//Construção do objeto conta1

const conta1 = new ContaCorrente(1, "Luiz", 100);

conta1.consultarSaldo();
conta1.depositar(5000);
conta1.consultarSaldo();


const conta2 = new ContaCorrente(2, "Ana", 200);

conta2.consultarSaldo();
conta2.depositar(7000);
conta2.consultarSaldo();

const conta3 = new ContaCorrente(3, "João", 100)

conta3.consultarSaldo();
conta3.depositar(200);
conta3.sacar(100);
conta3.consultarSaldo();