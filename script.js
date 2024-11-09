let person = {
  name: "Alice",
  age: 25,
  job: "developer",
};

console.log("Using for-in loop:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log("Using for-of loop:");
const entries = Object.entries(person);
for (let [key, value] of entries) {
  console.log(key + ": " + value);
}
