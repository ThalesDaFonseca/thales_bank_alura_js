import {cliente} from "./cliente.js";
import {contaCorrente} from "./contaCorrente.js";

//const cliente1 = new cliente();

//cliente1.nome = "Thales";
//cliente1.cpf = 12345678910;

const cc1 = new contaCorrente();
cc1.cliente = new cliente();
cc1.cliente.nome = "Thales";
cc1.cliente.cpf = 12345678910;
cc1.agencia = 1001;
cc1.saldo = 0;

//const cliente2 = new cliente();

//cliente2.nome = "Gabriella";
//cliente2.cpf = 11122233344;

const cc2 = new contaCorrente();
cc2.cliente= new cliente();
cc2.cliente.nome = "Gabriella";
cc2.cliente.cpf = 11122233344;
cc2.agencia = 1002;
cc2.saldo = 0;

//cc1.deposito(12);
//cc1.retirada(12);
//cc1.transferencia(12,cc2);

//cc2.deposito(13);
//cc2.retirada(13);
//cc2.transferencia(13,cc1);

//console.log(cliente1);
console.log(cc1);
//console.log(cliente2);
console.log(cc2);





