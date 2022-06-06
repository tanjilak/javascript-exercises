const removeFromArray = function(arr,int, int2, int3, int4) {
  //use indexOf to search for the element
let index = arr.indexOf(int);
  //loop if element is searched 
  //remove the searched element after the first position
  if (index > -1){
  arr.splice(index, 1);
  }

let index2 = arr.indexOf(int2);
   if (index2 > -1){
  arr.splice(index2, 1);
  }

  let index3 = arr.indexOf(int3);
   if (index3 > -1){
  arr.splice(index3, 1);
  }

  let index4 = arr.indexOf(int4);
   if (index4 > -1){
  arr.splice(index4, 1);
  }
  
  //return the new array
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
