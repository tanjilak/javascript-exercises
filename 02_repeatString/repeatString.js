const repeatString = function(string, n) {
    for (i=0; i<n; i++){
      //concat joins something together
      string2 = string.concat(string)
      string3 = string.concat(string2) 
    }
     return string3;
};



// Do not edit below this line
module.exports = repeatString;
