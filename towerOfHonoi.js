function tower(num,origin,destination,spare){
	if(num == 1) {
		console.log('move ' + origin + ' to ' +  destination);
		return;
	}
	else {
		tower(num - 1,origin,spare,destination);
		tower(1,origin,destination,spare);
		tower(num - 1,spare,destination,origin);
	}
}

var result = tower(4,"A", "B", "C");
console.log(result);

// tower(4,’a’,’b’,’c’)
// 	tower(3,’a’,’c’,’b’)
// 		tower(2,’a’,’b’,’c’)
//     		tower(1,’a’,’c’,’b’)
// 	  			if 1 move var a to var b                	log - move a to c
//         	tower(1,’a’,’b’,’c’)
//           		if 1 move var a to var b              		log - move a to b
//         	tower(1,’c’,’b’,’a’)
// 	  			if 1 move var a to var b                	log - move c to b
// 		tower(1,’a’,’c’,’b’)
// 			if 1 move var a to var b 		      			log - move a to c
// 		tower(2,’b’,’c’,’a’)
//             tower(1,’b’,’a’,’c’)
// 		  		if 1 move var a to var b                 	log - move b to a
// 	      	tower(1,’b’,’c’,’a’)
// 		  		if 1 move var a to var b              		log - move b to c
// 	      	tower(1,’a’,’c’,’b’)
// 		  		if 1 move var a to var b              		log - move a to c
// 	tower(1,’a’,’b’,’c’)
// 	    if 1 move var a to var b                           	log - move a to b
// 	tower(3,’c’,’b’,’a’)
// 		tower(2,’c’,’a’,’b’)
//        		tower(1,’c’,’b’,’a’)
// 	      		if 1 move var a to var b                	log - move c to b
// 	   		tower(1,’c’,’a’,’b’)
// 	      		if 1 move var a to var b              		log - move c to a
// 	   		tower(1,’b’,’a’,’c’)
// 	      		if 1 move var a to var b              		log - move b to a
// 		tower(1,’c’,’b’,’a’)
// 	       	if 1 move var a to var b 		      			log - move c to b
//         tower(2,’a’,’b’,’c’)
//  			tower(1,’a’,’c’,’b’)
// 		      	if 1 move var a to var b                	log - move a to c
// 		   	tower(1,’a’,’b’,’c’)
// 		     	if 1 move var a to var b              		log - move a to b
// 		   	tower(1,’c’,’b’,’a’)
// 		      	if 1 move var a to var b              		log - move c to b