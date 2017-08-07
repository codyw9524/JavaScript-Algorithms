function reverseHash(obj){
    var output = {};
    for(key in obj){
        output[obj[key].toString()] = key;
    }
    return output;
}

console.log(reverseHash({'name': 'Cody', 'email': 'cody@cody.com'}))