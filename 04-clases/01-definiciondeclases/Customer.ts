class Customer {

    firstName: string;
    lastName: string;


    //Constructor de la clase Customer
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;

    }
}


// Instancia de un objeto

let myCustomer = new Customer("Nicole", "De Vincenzo");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);