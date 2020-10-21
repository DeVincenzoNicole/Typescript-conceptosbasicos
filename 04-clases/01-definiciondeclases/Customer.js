var Customer = /** @class */ (function () {
    //Constructor de la clase Customer
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Instancia de un objeto
var myCustomer = new Customer("Nicole", "De Vincenzo");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
