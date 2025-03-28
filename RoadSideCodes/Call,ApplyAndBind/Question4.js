// 4. write printAnimals() in such a way that it prints all animals in object below.

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name);
    };
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i); // #0 Lion: King #1 Whale: Queen
}
