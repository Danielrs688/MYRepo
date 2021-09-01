const product = { count: -3, price: 12.55, type: "ropa" };


let total;
if ( product.count > 0){
    total = product.count*product.price;
} else{
    total = 0
};

console.log(total);

let tipoIVA;

switch(product.type){
    case "alimentacion":
        tipoIVA = 0.10; break;
        case "libro":
            tipoIVA = 0.04; break;
            default: tipoIVA = 0.21;
}

console.log(tipoIVA);

const IVA = total * tipoIVA;

console.log(IVA);

console.log(total + IVA);

