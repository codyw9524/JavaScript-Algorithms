function randomNumberFromRange(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDice(){
	var min;
	var max;
	var count = 0;
	var sum = 0;
	var dupe;
	while(true){
		var roll = randomNumberFromRange(1, 20);
		count++;
		sum += roll;
		if(!max || roll > max){
			max = roll;
		}
		if(! min || roll < min){
			min = roll;
		}
		if(! dupe || dupe != roll){
			dupe = roll;
		} else {
			break;
		}
	}
	console.log('# of rolls: ', count)
	console.log('min: ', min)
	console.log('max: ', max)
	console.log('avg: ', sum / count)
}

rollDice();