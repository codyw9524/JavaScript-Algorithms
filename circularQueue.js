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
	var output = this.dataStore[this.head];
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
 	this.capacity = size;
 }

var cq = new circleQueue(5);

for(let i = 0; i < 6; i++){
	cq.enqueue(6);
}
// cq.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6);
console.log(cq)
cq.grow(20);
console.log(cq)

for(let i = 0; i < 20; i++){
	cq.enqueue(20);
}

console.log(cq)
console.log(cq.isFull());
cq.dequeue()
console.log(cq)

