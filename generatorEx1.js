function* displayIterator() {
  const respond = ["ama", "ese", "haha", "krew"];
  for (let name of respond) {
    console.log(`the name is ${name}`);
    yield;
  }
}
const genIterator = displayIterator();
genIterator.next();
genIterator.next();
genIterator.next();
genIterator.next();
