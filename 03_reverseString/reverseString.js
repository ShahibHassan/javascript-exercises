const reverseString = function (string) {
  let reversedString = [];
  const splitString = string.split('');
  //get the string and split
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(splitString[i]);
  }
  let result = reversedString.join('');
  return result;
  // reverse string
  // join back together
};

// Do not edit below this line
module.exports = reverseString;
