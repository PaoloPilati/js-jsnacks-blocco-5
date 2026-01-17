const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

function getObjectValue(array, value) {array.forEach((object) => {
  console.log(object[value])
});}

getObjectValue(people, "name");