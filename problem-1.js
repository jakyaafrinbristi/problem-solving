// Create an array of objects, each representing a person with properties like name, 
// age, and gender. Write a function to filter out all females and then map the remaining 
// people to an array of names. Print the final result.
const people = [
  { name: "Borkot", age: 30, gender: "male" },
  { name: "Rafid", age: 22, gender: "male" },
  { name: "Ria", age: 28, gender: "female" },
  { name: "Saima", age: 35, gender: "female" },
];


function getNonFemaleNames(persons) {
  return persons
    .filter(person => person.gender !== "female")
    .map(person => person.name);
}

const result = getNonFemaleNames(people);
console.log(result); 

