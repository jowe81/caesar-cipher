const getCipher = (char, key) => {
  let lowerCaseA = 65;
  let lowerCaseZ = 90;
  let upperCaseA = 97;
  let upperCaseZ = 122;

  const x = char.charCodeAt(0);
  let newCode = x; //Default to no shift (non alpha characters won't be touched)

  key = key % 26; //Ensure validity of key

  if (x >= lowerCaseA && x <= lowerCaseZ || x >= upperCaseA && x <= upperCaseZ) {
    //alpha
    newCode = x - key; //Shift first, deal with wrapping after
    if (key > 0) {
      //Positive key -> left-shift
      if (!(x >= lowerCaseA + key && x <= lowerCaseZ || x >= upperCaseA + key && x <= upperCaseZ)) {
        newCode += 26; //Wrap to right
      }
    } else {
      //Negative key -> right-shift
      if (!(x >= lowerCaseA && x <= lowerCaseZ + key || x >= upperCaseA && x <= upperCaseZ + key)) {
        newCode -= 26; //Wrap to left
      }
    }
  }

  return String.fromCharCode(newCode);
};

const encrypt = (plaintext, key) => {
  /*
    split string into array of characters
    for each character in array
      shift this character and add it to the output array
    return the string resulting from joining the output array
  */
  const output = [];
  plaintext.split('').forEach(element => {
    output.push(getCipher(element, -key));
  });
  return output.join('');
};

module.exports = { encrypt };