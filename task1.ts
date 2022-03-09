interface IDate {
  dt: string;
  quantity: number;
  age: number | null;
  temp: {
    temperature: string;
    city: string;
    optional?: boolean;
  };
}

let arr: IDate[] = [
  {
    dt: "01-01-2021",
    quantity: 100,
    age: null,
    temp: {
      temperature: "100 degrees",
      city: "Norway",
    },
  },
  {
    dt: "02-01-2021",
    quantity: 150,
    age: 23,
    temp: {
      temperature: "103 degrees",
      city: "Egypt",
    },
  },
  {
    dt: "03-01-2021",
    quantity: 150,
    age: 22,
    temp: {
      temperature: "98 degrees",
      city: "Kypris",
    },
  },
  {
    dt: "03-01-2021",
    quantity: 150,
    age: 22,
    temp: {
      temperature: "98 degrees",
      city: "Holland",
    },
  },
  {
    dt: "03-01-2021",
    quantity: 700,
    age: 27,
    temp: {
      temperature: "50 degrees",
      city: "Kursk",
      optional: true,
    },
  },
  {
    dt: "03-01-2021",
    quantity: 700,
    age: 27,
    temp: {
      temperature: "50 degrees",
      city: "Kursk",
      optional: true,
    },
  },
];

let set = new Set<String>(arr.map((item) => item["dt"]));
console.log(set);

let map = new Map<String, IDate[]>();
let index = set.values();
for (let i = 0; i < set.size; i++) {
  let currentIndex = index.next().value;
  map.set(currentIndex, arr.filter(item => item["dt"] == currentIndex));
}

console.log(map);
