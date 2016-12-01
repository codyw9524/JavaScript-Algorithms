// require('stack.js')

function circleQueue(n){
	this.head = -1;
	this.tail = -1;
	this.dataStore = [];
	this.capacity = n;
}

circleQueue.prototype.enqueue = function(value){
	if(this.isFull()){
		console.log('Cannot enqueue ' + value + '.  Queue is FULL.');
		return null;
	}
	if(this.head == -1 && this.tail == -1){
		this.head = 0;
		this.tail = 0;
	}
	else if(this.tail == this.capacity - 1){
		this.tail = 0;
	} else {
		this.tail++;
	}
	this.dataStore[this.tail] = value;
	return this;
}

circleQueue.prototype.dequeue = function(){
	let output = this.dataStore[this.head];
	this.dataStore[this.head] = null;
	if(this.tail == this.head){
		this.head = -1;
		this.tail = -1;
	}
	else if(this.head == this.capacity - 1){
		this.head = 0;
	} else {
		this.head++;
	}
	return output;
}

circleQueue.prototype.isFull = function(){
	if((this.head == 0 && this.tail == this.capacity - 1) || (this.head == this.tail + 1)){
		return true;
	} else {
		return false;
	}
}

circleQueue.prototype.isEmpty = function(){
	if(this.head == -1 && this.tail == -1){
		return true;
	} else {
		return false;
	}
}

circleQueue.prototype.grow = function(size){
	let end = this.capacity; 
	this.capacity = size;
	for(let i = 0; i < this.head; i++){
		let node = this.dataStore[i];
		if(node){
			this.dataStore[end] = node;
			this.dataStore[i] = null;
			end++;
		}
	}
	this.tail = end - 1;
}

circleQueue.prototype.reorderAbsolute = function(){
	let stack = [];
	for(let i = 0; i < this.dataStore.length; i++){
		let node = this.dataStore[i];
		if(node >= 0){
			this.enqueue(this.dequeue())
		} else {
			stack.push(this.dequeue())
		}
	}
	while(stack.length != 0){
		this.enqueue(stack.pop())
	}
	for(let i = 0; i < this.dataStore.length; i++){
		let node = this.dataStore[i];
		if(node >= 0){
			stack.push(this.dequeue())
		}
	}
	while(stack.length != 0){
		this.enqueue(stack.pop())
	}
	let originalTail = this.tail;
	for(let i = this.head; i != originalTail; i++){
	  if(i == this.dataStore.length){
	    i = 0;
	  }
		let node = this.dataStore[i];
	  if(node >= 0){
	  	stack.push(this.dequeue())
	  } else {
	  	this.enqueue(this.dequeue())
	  }
  }
  if(this.dataStore[this.head] >= 0){
  	stack.push(this.dequeue())
  }
  while(stack.length != 0){
  	this.enqueue(stack.pop());
  }
	console.log('CQ : ', this.dataStore);
	console.log(' S : ', stack);
	return this;
}

var cq = new circleQueue(7);
cq.enqueue(-10)
// cq.enqueue(20)
// cq.enqueue(-20)
// cq.enqueue(-30)
// cq.enqueue(40)
// cq.enqueue(-40)
// cq.enqueue(50)
// cq.dequeue()
// cq.dequeue()
// cq.enqueue(100)
// cq.grow(20)
// cq.enqueue(150)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
// cq.enqueue(200)
console.log(cq);

// cq.reorderAbsolute();








