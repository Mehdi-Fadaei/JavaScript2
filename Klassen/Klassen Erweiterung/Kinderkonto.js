"use strict";

class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung);
        this._limit = limit;
    }

    _saldo_pruefen(auszahlung){
        this._saldo - auszahlung < this._limit ? false : true;
    }

    abheben(auszahlung){
        this._saldo_pruefen(auszahlung) ? super.abheben(auszahlung) : console.log("Auszahlung nicht möglich : Limit überschritten.");
    }
}


