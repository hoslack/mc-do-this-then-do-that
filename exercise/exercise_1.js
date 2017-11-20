var divide = function(x, y) {
  // todo divide the numbers and handle the case where y is zero (see the tests)
  if(y===0){
  	return Error('Cannot divide by zero');
  }
  else return x/y;
}

var divideByThenAdd = function(x, y, z) {
  var division = divide(x, y);

  // todo handle the case where divide returns an error
if(division===Error){
	return Error('Cannot divide by zero');
}

  return division + z;
}

module.exports = {
  divide,
  divideByThenAdd
}
