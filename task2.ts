console.log("Task 1");
let arrMap = new Map<number, null>();
for (let i = 0; i <= 100; i++) {
  arrMap.set(i, null);
}

console.log(arrMap);

console.log("Task 2");

arrMap.forEach((element, key) => {
  if (key % 3 === 0 && key % 5 === 0) {
    console.log(`Число ${key}`);
    console.log("I can believe in that");
  } else if (key % 3 === 0) {
    console.log(`Число ${key}`);
    console.log("Devided by three");
  } else if (key % 5 === 0) {
    console.log(`Число ${key}`);
    console.log("Oops, here is 5");
  }
});

console.log("Task 3");

function getDecision(array: string[]): boolean {
  let [square, statusOfPrivatization, numberOfOwners, street] = array;
  for (let i = 0; i < array.length; i++) {
    if (Number(square) >= 56) {
      return true;
    } else if (Number(square) <= 40 && street == "Ленина") {
      return true;
    } else {
      return false;
    }
  }
}

let flat = [
  ["36", "не приватизирован", "4 собственника", "Парковая"],
  ["45", "приватизирован", "3 собственника", "Луговая"],
  ["56", "не приватизирован", "1 собственник", "Луговая"],
  ["56", "приватизирован", "5 собственников", "Ленина"],
  ["25", "не приватизирован", "2 собственника", "Ленина"],
];

flat.forEach((item) => {
  console.log(getDecision(item));
});
