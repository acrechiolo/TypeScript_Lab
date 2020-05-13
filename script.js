"use strict";
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
console.log(findNameOfTallestMountain(mountains));
