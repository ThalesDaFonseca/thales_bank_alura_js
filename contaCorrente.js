import { cliente } from "./cliente.js";

export class contaCorrente {
    agencia;
    saldo;
    cliente;

    set cliente(novoValor){
        if (novoValor instanceof cliente){
        this.cliente = novoValor;
        };
    };

    get cliente(){
        return this.cliente;
    };

    get saldo(){
        return this.saldo;
    }

    retirada(vSaq){
        if (vSaq >0){
            if (this.saldo >= vSaq) {
                this.saldo -= vSaq;
                console.log(this.cliente);
                console.log("Valor sacado:", vSaq,"\nValor disponível na conta:", this.saldo);
            } else {
                console.log(this.cliente);
                console.error("Operação de saque indisponível" ,"\nValor disponível na conta:", this.saldo);
            };
        }else{
            console.log(this.cliente);
            console.log("Valor disponível na conta:", this.saldo);
        };
    };
    deposito(vDep){
        if (vDep>0){
            this.saldo +=vDep;
            console.log(this.cliente);
            console.log("Valor depositado de R$", vDep);
            console.log("Valor disponível na conta:", this.saldo)
        }
    };

    transferencia(vTrans,contaCorrente){
        if (this.saldo>=vTrans && vTrans>0){
           this.saldo -= vTrans;
            console.log(this.cliente);
            console.log("Valor transferido de R$", vTrans);
            console.log("Valor disponível na conta:", this.saldo)
            contaCorrente.saldo +=vTrans;
        }else{
            console.error("Operação de transferência interrompida", "\nValor disponível na conta:", this.saldo);
        }
    }
};
