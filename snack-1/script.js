const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
function getArrayElement(array) {array.forEach(element => {
    console.log(element);
});
};

getArrayElement(names);