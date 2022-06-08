const sumAll = function(int1, int2) {

  n = int2;
  m = int1;
  
  //sum of consecutive numbers 
  //n is the amount of integers counted
  //loop to find the sum
  
  for(let i=0; i<int2; i++){

    //if inputs are both numbers
    //RUN THE CORRECT SUM 
    
    if (typeof int1==='number' && typeof int2 === 'number'){
      
      //if in reverse order
      if (int1 > int2){
        sum = m/2*(int1+int2)
      }
        
      //if negative number 
      else if(int1 < 0 || int2 < 0){
        return "ERROR"    
      }

      //if not in reverse
      else{
      sum = n/2*(int1 + int2)
      }
      
       //return value
      return sum;
  }

  //if its not a number (string)
  else{
      return "ERROR"
    }
  
    
  }

  //add an error message if anything is undefined
  return "ERROR"

};

// Do not edit below this line
module.exports = sumAll;
