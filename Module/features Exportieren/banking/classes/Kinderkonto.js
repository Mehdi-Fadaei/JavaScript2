
export class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung);
        this._limit = limit * -1;
    }

    _saldo_pruefen(auszahlung) {
        return this._saldo - auszahlung < this._limit ? true : false;
    }

    abheben(auszahlung) {
        !this._saldo_pruefen(auszahlung) ? super.abheben(auszahlung) : console.log("Auszahlung nicht möglich: Limit überschritten.");
    }
}