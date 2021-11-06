const getCipher = (char, key) => {
  return char;
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
    output.push(getCipher(element, key));
  });
  return output.join('');
};

module.exports = { encrypt };