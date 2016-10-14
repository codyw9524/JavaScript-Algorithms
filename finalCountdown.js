function finalCountdown(a,b,c,d){
	var countDown;
	if(b > c){
		countDown = true;
	} else {
		countDown = false;
	}
	while(b != c){
		if(b % a == 0 && b != d){
			console.log(b);
		}
		if(countDown){
			b--;
		} else {
			b++;
		}
	}
	if(c % a == 0){
		console.log(c);
	}
}

finalCountdown(4, 100, 1, 40);
