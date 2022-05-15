const repeatString = function(string, n) {
  //for every number =0 or greater, return a repetition of that number
  //use for loop to repeat the string
    for (i=0; i<=n; i++){

      //repeat string and return it
      string = string.repeat(n);
      return string;

      //OLD FUNCTION
       //concat joins something together
      //string 2 = "heyhey"
     // string2 = string.concat(string)
    //  string3 = string.concat(string2) 
    } 

  //returns ERROR if n is a negative number
  for (i=0; i>n; i--){
    return "ERROR";
  }

};



// Do not edit below this line
module.exports = repeatString;
