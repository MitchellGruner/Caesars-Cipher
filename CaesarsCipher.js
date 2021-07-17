function rot13(str) {

  /* JSON array that holds all letters of the alphabet with their respective order.*/
  let alphabet = [{letter: "A", number: 0}, {letter: "B", number: 1}, {letter: "C", number: 2}, 
                  {letter: "D", number: 3}, {letter: "E", number: 4}, {letter: "F", number: 5}, 
                  {letter: "G", number: 6}, {letter: "H", number: 7}, {letter: "I", number: 8},
                  {letter: "J", number: 9}, {letter: "K", number: 10}, {letter: "L", number: 11}, 
                  {letter: "M", number: 12}, {letter: "N", number: 13}, {letter: "O", number: 14}, 
                  {letter: "P", number: 15}, {letter: "Q", number: 16}, {letter: "R", number: 17}, 
                  {letter: "S", number: 18}, {letter: "T", number: 19}, {letter: "U", number: 20}, 
                  {letter: "V", number: 21}, {letter: "W", number: 22}, {letter: "X", number: 23}, 
                  {letter: "Y", number: 24}, {letter: "Z", number: 25}];

  /* Initializing empty arrays. */
  let arr = [];
  let indexArr = [];

  /* Determining where the indexes of the spaces in the string. */
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      indexArr.push(i);
    }
  }

  /* Remove all spaces in order to loop through all the letters. */
  str = str.replace(/\s/g, '');
  
  /* Populate the array with all letters found in the string. */
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }
  
  /* Check if current value in string is equal to the JSON file's letter -
    if so, change value of the array to be shifted by 13 (Caesars Cipher). */
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (str.charAt(i) === alphabet[j].letter) {
          arr[i] = alphabet[(j + 13) % 26].letter;
        }
      }
  }

  /* Add spaces at correct index to the array. */
  for (let i = 0; i < indexArr.length; i++) {
    arr.splice(indexArr[i], 0, " ");
  }

  /* Remove the commas in the string and return that string. */
  let shift = arr.toString().replace(/,/g, '');
  return shift;
}

/* Should return: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. */
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");