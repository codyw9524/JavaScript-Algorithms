//Repeat the input string 'n' times
//If 'n' < 0 return an empty string

function repeatStringNumTimes(str, num) {
  var length = str.length;
  if(num < 0){
    return '';
  } else {
    for(var i = 0; i < num - 1; i++){
      str += str.substring(0, length);
    }
  }
  return str;
}

repeatStringNumTimes("abc", 3);