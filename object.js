function Info(name, id, shift, payrate){
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let shift = document.getElementById("shift").value;
    let payrate = document.getElementById("payrate").value;
    const sara = new ProductionWorker(name, id, shift, payrate)
    document.getElementById('nameout').innerhtml=sara.name;
    document.getElementById('idout').innerhtml=sara.id;
    document.getElementById('shiftout').innerhtml=sara.shift;
    document.getElementById('payrateout').innerhtml=sara.payrate;
    alert("Yes")
}
class Employee {
    constructor(name, id){
        this._name = name;
        this._id = id;
    }
get name(){
    return this._name;
}
set name(newname){
    this._name = newname;
}
get id(){
    return this._id;
}
set id(newid){
    this._id = newid;
}
}
class ProductionWorker extends Employee {
    constructor(name, id, shift, payrate){
    super(name, id)
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
console.log(sara.name);
console.log(sara.shift);
console.log(sara.id);
console.log(sara.payrate);