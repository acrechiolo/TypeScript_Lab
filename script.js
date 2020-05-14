"use strict";
//TALLEST MOUNTAIN 
;
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
let findNameOfTallestMountain = (mountainsArray) => {
    let currentTallestMountain = 0;
    let nameOfTallestMountain = "";
    mountainsArray.forEach(mountain => {
        if (mountain.height > currentTallestMountain) {
            currentTallestMountain = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
};
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
;
let products = [
    { name: "Diamond Encrusted Electric Cat Toothbrush", price: 5000 },
    { name: "Louis Vuitton PPE Mask", price: 600 },
    { name: "A bag of moldy skittles", price: 0.50 }
];
let calcAverageProductPrice = (productsArray) => {
    let total = 0;
    productsArray.forEach(product => {
        total += product.price;
    });
    return total / products.length;
};
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
let calcInventoryValue = (inventoryItemsArray) => {
    let inventoryValue = 0;
    inventoryItemsArray.forEach(item => {
        inventoryValue += item.product.price * item.quantity;
    });
    return inventoryValue;
};
let totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);
