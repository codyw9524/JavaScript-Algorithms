function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();
  var length = str.length;
  for(var i = 0; i < length / 2; i++){
    if(str[i] != str[length - 1 - i]){
      return false;
    }
  }
  return true;
}



console.log(palindrome("eye"));