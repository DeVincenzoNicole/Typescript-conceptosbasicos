"use strict";
var Customer = /** @class */ (function () {
    // Atajo de propiedades de parámetro
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Instancia de un objeto
var myCustomer = new Customer("Nicole", "De Vincenzo");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
