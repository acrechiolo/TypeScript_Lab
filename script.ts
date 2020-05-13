interface Mountain {
    name: string,
    height: number,
};

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];

let findNameOfTallestMountain = (mountainsArray: Mountain[]): string => {
    let currentTallestMountain: number = 0;
    let nameOfTallestMountain: string = "";
    mountainsArray.forEach(mountain => {
        if (mountain.height > currentTallestMountain) {
            currentTallestMountain = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
}
console.log(findNameOfTallestMountain(mountains));

