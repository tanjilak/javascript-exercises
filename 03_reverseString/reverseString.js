const reverseString = function(string) {
  //maybe convert a string to an array??
  // use '' to reverse the characters 
  let array = string.split('');

  //reverse the array
  array2 = array.reverse();

  //turn array to string
  // remove the commas from the array
  let finalstring = array2.join('');

  return finalstring;
  
};

// Do not edit below this line
module.exports = reverseString;
