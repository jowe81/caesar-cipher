const getCipher = (char, key) => {
  /*

    lowerCaseA = 65

  */
  let lowerCaseA = 65;
  let lowerCaseZ = 90;
  let upperCaseA = 97;
  let upperCaseZ = 122;

  const x = char.charCodeAt(0);
  let newCode = x; //Default to no shift

  if (x >= lowerCaseA && x <= lowerCaseZ || x >= upperCaseA && x <= upperCaseZ) {
    //alpha
    newCode = x - key;
    if (key > 0) {
      //Positive key -> left-shift
      if (x >= lowerCaseA + key && x <= lowerCaseZ || x >= upperCaseA + key && x <= upperCaseZ) {
        //character doesn't need to wrap, just transpose
        newCode = x - key;
      } else {
        //character needs to wrap
        newCode = x - key + 26;
      }
    } else {
      //Negative key -> right-shift
      if (x >= lowerCaseA && x <= lowerCaseZ + key || x >= upperCaseA && x <= upperCaseZ + key) {
        //character doesn't need to wrap, just transpose
        newCode = x - key;
      } else {
        //character needs to wrap
        newCode = x - key - 26;
      }
      
    }
  }


  return String.fromCharCode(newCode);
};

const encrypt = (plaintext, key) => {
  /*
    for each character in plaintext
      return new ascii code

    ASCII char codes:
      uppercase 65 - 90
      lowercase 97 - 122

    */
  const output = [];
  plaintext.split('').forEach(element => {
    output.push(getCipher(element, -key));
  });
  return output.join('');
};

module.exports = { encrypt };