function PriQueue(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

function PriQueueNode(priority, value){
	this.value = value;
	this.priority = priority;
	this.next = null;
}

PriQueue.prototype.enqueue = function(priority, value){
	let node = new PriQueueNode(priority, value);
	if(!this.head){
		this.head = node;
		return this;
	}
	let current = this.head;
	while(current.next && current.next.priority <= priority){
		current = current.next
	}
	node.next = current.next;
	current.next = node;
	return this;
}

PriQueue.prototype.dequeue = function(){
	let output = this.head;
	this.head = this.head.next;
	return output;
}

PriQueue.prototype.display = function(){
	if(!this.head){
		return null;
	}
	let current = this.head;
	while(current){
		console.log('---- NODE ----')
		console.log('Priority: ', current.priority);
		console.log('Value: ', current.value);
		current = current.next;
	}
}

PriQueue.prototype.playMessages = function(){
	while(this.head){
		console.log(this.dequeue().value)
	}
}

let pq = new PriQueue();

pq.enqueue(1, 1).enqueue(3,3).enqueue(2,2)
console.log('Dequeued: ', pq.dequeue())
pq.playMessages();