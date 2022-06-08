const ftoc = function(f) {
  //formula for f to c conversion
  celsius = (f-32)*(5/9);

  //round the answer to one decimal
  // use Math.round()
  //*100 for 2 decimal places // *10 for 1 decimal place
  
  celsiusrounded = Math.round((celsius + Number.EPSILON)*10) /10;

  //return answer
  return celsiusrounded;
};


//same concept
const ctof = function(c) {
  fh = 32+(c*(9/5));
  fhrounded = Math.round((fh + Number.EPSILON)*10) /10
  return fhrounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
