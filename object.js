function info(){
    let name = document.getElementById("name").value;
    let ident = document.getElementById("ident").value;
    let shift = document.getElementById("shift").value;
    let payrate = document.getElementById("payrate").value;
    const sara = new ProductionWorker(name, ident, shift, payrate);
    console.log(sara.name);
    console.log(sara.shift);
    console.log(sara.ident);
    console.log(sara.payrate);
    document.getElementById('name').innerhtml=sara.name;
    document.getElementById('identout').innerhtml=sara.ident;
    document.getElementById('shiftout').innerhtml=sara.shift;
    document.getElementById('payrateout').innerhtml=sara.payrate;
}
class Employee {
    constructor(name, ident){
        this._name = name;
        this._ident = ident;
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name = newname;
    }
    get ident(){
        return this._ident;
    }
    set ident(newident){
        this._ident = newident;
    }
}
class ProductionWorker extends Employee {
    constructor(name, ident, shift, payrate){
    super(name, ident)
    this._shift = shift;
    this._payrate = payrate;
    }
    get shift() {
        return this._shift;
    }
    set shift(newshift) {
        this._shift = newshift;
    }
    get payrate() {
        return this._payrate;
    }
    set shift(newpayrate) {
        this._payrate = newpayrate;
    }
}
