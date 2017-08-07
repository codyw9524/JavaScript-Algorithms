//Return the input string with only the first letter of each word capitalized

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function titleCase(str) {
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){
    str[i] = capitalizeFirstLetter(str[i]);
  }
  str = str.join(' ');
  return str;
}

console.log(titleCase('a brave new world'))