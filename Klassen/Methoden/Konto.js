"use strict"

class Konto {

    constructor(iban, inhaber, einzahlung){
        this.iban = iban;
        this.inhaber = [inhaber];
        this.saldo = einzahlung;
        this.aktive = true;
    }

    einzahlen(einzahlung){
        this.saldo += einzahlung;
    }

    abheben(auszahlung){
        this.saldo -= auszahlung;
    }

    kontostand_abfragen(){
        return this.saldo;
    }

    

}


