const leapYears = function(year) {


//first if (divisible by 400) // works for 1600
if (year % 400 == 0){
return true;
}

// second if (divisible by 100) // works for 1900 

else if (year % 100 == 0){
  return false;
}

  //third if (divisible by 4)
else if (year % 4 == 0){
  return true;
}


else{
  return false;
}
};

// Do not edit below this line
module.exports = leapYears;
