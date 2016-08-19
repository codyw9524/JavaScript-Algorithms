function addTime(str){
    str = parseInt(str);
    str += 12;
    if(str == 24){
        return "00"
    }
    return str.toString();
}
    
function convertTime(str){
    var length = str.length;
    var check = false;
    if(str[length - 2] == "P"){
        if(str.slice(0, 2) != "12"){
            check = true;
        }
    } else if(str.slice(0, 2) == "12"){
        check = true;
    }
    str = str.slice(0, str.length -2)
    if(check){
        str = str.split(":");
        str[0] = addTime(str[0]);
        str = str.join(":");
    }
    console.log(str)
}
function main() {
    var time = "12:05:43PM";
    convertTime(time);
    var time2 = "12:05:43AM";
    convertTime(time2);
    var time3 = "5:45:21PM";
    convertTime(time3);
}
main();