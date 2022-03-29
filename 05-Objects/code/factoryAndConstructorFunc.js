// Factory and Constructor Function

//-----------------------------------------------
// Factory function (returns a new object)

function createAddress(street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode
    };
}

           // if the key and value are the same you can 
           // just drop the value to make the code cleaner
function createAddressClean(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = createAddress("a", "b", "c");
let address1 = createAddressClean("a", "b", "c");
console.log(address);
console.log(address1);

//-----------------------------------------------
// Constructor function 
// use pascal naming notation

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address2 = new Address("a", "b", "c");