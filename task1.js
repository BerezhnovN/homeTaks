var arr = [
    {
        dt: "01-01-2021",
        quantity: 100,
        age: null,
        temp: {
            temperature: "100 degrees",
            city: "Norway"
        }
    },
    {
        dt: "02-01-2021",
        quantity: 150,
        age: 23,
        temp: {
            temperature: "103 degrees",
            city: "Egypt"
        }
    },
    {
        dt: "03-01-2021",
        quantity: 150,
        age: 22,
        temp: {
            temperature: "98 degrees",
            city: "Kypris"
        }
    },
    {
        dt: "03-01-2021",
        quantity: 150,
        age: 22,
        temp: {
            temperature: "98 degrees",
            city: "Holland"
        }
    },
    {
        dt: "03-01-2021",
        quantity: 700,
        age: 27,
        temp: {
            temperature: "50 degrees",
            city: "Kursk",
            optional: true
        }
    },
    {
        dt: "03-01-2021",
        quantity: 700,
        age: 27,
        temp: {
            temperature: "50 degrees",
            city: "Kursk",
            optional: true
        }
    },
];
var set = new Set(arr.map(function (item) { return item["dt"]; }));
console.log(set);
var map = new Map();
var index = set.values();
var _loop_1 = function (i) {
    var currentIndex = index.next().value;
    map.set(currentIndex, arr.filter(function (item) { return item["dt"] == currentIndex; }));
};
for (var i = 0; i < set.size; i++) {
    _loop_1(i);
}
console.log(map);
//# sourceMappingURL=task1.js.map