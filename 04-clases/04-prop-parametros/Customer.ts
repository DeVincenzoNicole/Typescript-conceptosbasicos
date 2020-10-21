class Customer {

    // Atajo de propiedades de parámetro
    constructor(private _firstName: string, private _lastName: string){


    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value:string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value:string) {
        this._lastName = value;
    }
}


// Instancia de un objeto

let myCustomer = new Customer("Nicole", "De Vincenzo");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);