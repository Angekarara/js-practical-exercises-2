const obj1 = {
  id: 1,
  name: "Alice",
  age: 25,
};

const obj2 = {
  id: 1,
  name: "Alice",
  age: 25,
};

const obj3 = {
  id: 2,
  name: "Bob",
  age: 30,
};

const obj4 = {
  id: 3,
  name: "Charlie",
  age: 35,
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
console.log(JSON.stringify(obj3) === JSON.stringify(obj4))