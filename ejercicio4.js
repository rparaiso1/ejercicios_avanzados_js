function findArrayIndex(array, text) {
    //Tu codigo
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
            if (array[i] === text) {
                return i;
            }   
    }
    return -1;
}

    console.log(findArrayIndex(mainCharacters, "Leia"))
    console.log(findArrayIndex(mainCharacters, "Rey"))
    console.log(findArrayIndex(mainCharacters, "Obi-Wan"))
    console.log(findArrayIndex(mainCharacters, "Yoda"))