const repeatString = function (word, num) {
  if (num < 0) {
    return 'ERROR';
  }

  let string = '';

  for (let i = 0; i < num; i++) {
    string += word;
  }

  return string;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin');
// Do not edit below this line
module.exports = repeatString;
