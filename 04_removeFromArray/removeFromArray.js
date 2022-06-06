const removeFromArray = function(arr,int) {
  //use indexOf to search for the element
let index = arr.indexOf(int);
  //loop if element is searched 
  //remove the searched element after the first position
  if (index > -1){
  arr.splice(index, 1);
  }

  //return the new a
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
