// Address Object

// street
// city
// zip


// func called showAddress(address)

// object literal syntax
let address = {
    street: "a",
    city: "b",
    zipCode: "c"
};

function showAddress(address) { 
    for (let key in address)
        console.log(key, address[key])
}

showAddress(address);