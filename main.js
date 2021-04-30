var units = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

// Print the result.
console.log(convertIntToString(arrayOfNumbers));

// Logic to get the String equivalent of the array of numbers.
function convertIntToString(arrNums) {
  // String to represent the phonetic equivalent of the integer.
  var strEquivalentOfNum = "";

  // Looping over the numbers like 10, 25, 209
  for (var i = 0; i < arrNums.length; i++) {
    var tempStr = "";
    // Inner looping over the length of each number.
    // ex: for 10. the j loop will run 2 times.first for 1 and 2nd for 0 and so on...
    for (var j = 0; j < arrNums[i].length; j++) {
      var number = arrNums[i];

      // Storing the converted string into a temp variable.
      tempStr += units[number.charAt(j)];
    }

    // Appending the temp string to the Main string
    strEquivalentOfNum += tempStr;
    if (i != arrNums.length - 1) {
      strEquivalentOfNum += ",";
    }
  }
  return strEquivalentOfNum;
}
