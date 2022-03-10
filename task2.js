console.log("Task 1");
var arrMap = new Map();
for (var i = 0; i <= 100; i++) {
    arrMap.set(i, null);
}
console.log(arrMap);
console.log("Task 2");
arrMap.forEach(function (element, key) {
    if (key % 3 === 0 && key % 5 === 0) {
        console.log("\u0427\u0438\u0441\u043B\u043E ".concat(key));
        console.log("I can believe in that");
    }
    else if (key % 3 === 0) {
        console.log("\u0427\u0438\u0441\u043B\u043E ".concat(key));
        console.log("Devided by three");
    }
    else if (key % 5 === 0) {
        console.log("\u0427\u0438\u0441\u043B\u043E ".concat(key));
        console.log("Oops, here is 5");
    }
    else {
        console.log(key);
    }
});
console.log("Task 3");
function getDecision(array) {
    var square = array[0], street = array[3];
    var numSquare = Number(square);
    var decision;
    for (var i = 0; i < array.length; i++) {
        if (numSquare >= 56) {
            decision = true;
        }
        else if (numSquare <= 40 && street == "Ленина") {
            decision = true;
        }
        else {
            decision = false;
        }
    }
    return decision;
}
var flat = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"],
];
flat.forEach(function (item) {
    console.log(getDecision(item));
});
//# sourceMappingURL=task2.js.map