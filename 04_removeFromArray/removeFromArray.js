const removeFromArray = function (arr, ...args) {
  args.forEach((arg) => {
    let i = 0;
    while (i < arr.length) {
      //cycle through array to find the rmv variable
      if (arr[i] === arg) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

//can also use filter instead of splice
