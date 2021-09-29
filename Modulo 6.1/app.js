var productList = [
    {
    product: "Jamón Ibérico",
    units: 1,
    price: 9.99,
    },
    {
    product: "Queso Tostado",
    units: 6,
    price: 4.45,
    },
    {
    product: "Vino Tinto",
    units: 12,
    price: 8.15,
    },
    ];

    var getDiscount = (units, cost) => (units > 5 ? 5 : 0) + (cost >= 50 ? 5 : 0);
var productCost = product => {
var productCost = product.units * product.price;
return productCost * (1 - getDiscount(product.units, productCost) / 100);
};
var totalCost = productList => {
var totalCost = 0;
for (var product of productList) {
totalCost += productCost(product);
}
return totalCost;
};
console.log(totalCost(products));