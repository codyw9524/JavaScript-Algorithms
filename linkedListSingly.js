function ListNode(value){
	this.value = value;
	this.next = null;
	this.child = null;
}

function SinglyLinkedList(value=null){
	if(value){
		this.head = new ListNode(value);
		this.nodeCount = 1;
	} else {
		this.head = null;
		this.nodeCount = 0;
	}
	this.tail = null;
	return this;
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomList(){
	var output = new SinglyLinkedList();
	var listLength = rand(5, 15);
	while(listLength--){
		output.addBack(rand(1,100));
	}
	output.setNodeCount();
	return output;
}

SinglyLinkedList.prototype.addFront = function(value){
	var newNode = new ListNode(value);
	if(!this.head) {
		this.head = newNode;
		this.tail = newNode;
	} else {
		var originalFrontNode = this.head;
		this.head = newNode;
		newNode.next = originalFrontNode;
	}
	this.nodeCount++;
	return this;
}

SinglyLinkedList.prototype.removeFront = function(){
	if(!this.head){
		console.log('List is empty, nothing to remove.');
		return null;
	} else {
		var output = this.head;
		this.head = this.head.next;
	}
	this.nodeCount--;
	return output;
}

SinglyLinkedList.prototype.contains = function(value){
	if(!this.head){
		return false;
	} else {
		var current = this.head;
		while(current){
			if(current.value == value){
				return true;
			}
			current = current.next;
		}
	}
	return false;
}

SinglyLinkedList.prototype.front = function(){
	if(!this.head){
		return null
	}
	return this.head.value;
}

SinglyLinkedList.prototype.display = function(){
	if(!this.head){
		return null;
	}
	var current = this.head;
	while(current){
		console.log(current.value);
		current = current.next;
	}
	return this;
}

SinglyLinkedList.prototype.min = function(current=this.head, returnValue=false){
	if(!this.head){
		return null;
	}
	let min = current;
	while(current){
		if(current.value < min.value){
			min = current;
		}
		current = current.next;
	}
	if(returnValue == 'value'){
		return min.value;
	}
	return min;
}

SinglyLinkedList.prototype.max = function(returnvalue){
	returnValue = returnValue || false
	if(!this.head){
		return null;
	}
	var current = this.head;
	var max = current;
	while(current){
		if(current.value > max.value){
			max = current;
		}
		current = current.next;
	}
	if(returnValue == 'value'){
		return max.value
	} else {
		return max;
	}
}

SinglyLinkedList.prototype.avg = function(){
	if(!this.head){
		return null;
	}
	var current = this.head;
	var sum = 0;
	while(current){
		sum += current.value;
		current = current.next;
	}
	return sum / this.nodeCount
}

SinglyLinkedList.prototype.back = function(){
	if(!this.tail){
		return null;
	}
	return this.tail.value;
}

SinglyLinkedList.prototype.addBack = function(value){
	var newNode = new ListNode(value);
	if(!this.head){
		this.head = newNode;
	} else {
		this.tail.next = newNode;
	}
	this.tail = newNode;
	return this;
}

SinglyLinkedList.prototype.removeBack = function(){
	if(!this.head){
		return null;
	}
	var current = this.head;
	if(!current.next){
		this.head = null;
	} else {
		while(current.next.next){
			current = current.next;
		}
		current.next = null;
		this.tail = current;
	}
	return this;
}

SinglyLinkedList.prototype.minToFront = function(){
	if(!this.head){
		return null;
	}
	var minNode = this.min();
	var current = this.head;
	if(minNode != this.head){
		while(current){
			if(current.next == minNode){
				current.next = minNode.next;
				var oldHead = this.head;
				this.head = minNode;
				minNode.next = oldHead;
			}
			if(current.next === null && minNode == this.tail){
				this.tail = current;
			}
			current = current.next;
		}
	}
	return this;
}

SinglyLinkedList.prototype.maxToBack = function(){
	if(!this.head){
		return null;
	}
	var maxNode = this.max();
	if(maxNode != this.tail){
		if(this.head == maxNode){
			this.head = this.head.next;
		}
		this.tail.next = maxNode;
		this.tail = maxNode;
	}
	return this;
}

SinglyLinkedList.prototype.prependValue = function(value, before){
	var newNode = new ListNode(value);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} 
	else if(this.head.value == before){
		newNode.next = this.head;
		this.head = newNode;
	} else {
		var current = this.head;
		while(current.next.value != before){
			current = current.next;
		}
		var oldNext = current.next;
		current.next = newNode;
		newNode.next = oldNext;
	}
	this.nodeCount++;
	return this;
}

SinglyLinkedList.prototype.appendValue = function(value, after){
	var newNode = new ListNode(value);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} else {
		var current = this.head;
		while(current.value != after){
			current = current.next;
		}
		var oldNext = current.next
		current.next = newNode;
		newNode.next = oldNext;
		if(current == this.tail){
			this.tail = newNode;
		}
	}
	this.nodeCount++;
	return this;
}

SinglyLinkedList.prototype.removeValue = function(value){
	if(!this.head){
		return null;
	}
	var current = this.head;
	if(current.value == value){
		this.head = current.next;
	} else {
		while(current.next){
			if(current.next.value == value){
				break;
			}
			current = current.next;
		}
		if(current.next){
			current.next = current.next.next;
		}
	}
	this.nodeCount--;
	return this;
}

SinglyLinkedList.prototype.splitOnValue = function(value){
	var output = new SinglyLinkedList();
	if(!this.head){
		return null;
	}
	var current = this.head;
	if(current.value == value){
		output = this.copyList();
		this.head = null;
		return output;
	}
	while(current.next){
		if(current.next.value == value){
			output = new SinglyLinkedList();
			output.head = current.next;
			output.tail = this.tail
			this.tail = current;
			current.next = null;
			output.setNodeCount();
			this.setNodeCount();
			return output;
		}
		current = current.next;
	}
	console.log('Split value not found in list.');
	return null;
}

SinglyLinkedList.prototype.removeNegatives = function(){
	if(!this.head){
		return null;
	}
	var current = this.head;
	while(current){
		if(current.value < 0){
			this.removeValue(current.value);
		}
		if(current.next == null){
			var endOfList = current;
		}
		current = current.next;

	}
	console.log(current);
	if(endOfList != this.tail){
		this.tail = endOfList;
	}
	return this;
}

SinglyLinkedList.prototype.setNodeCount = function(){
	this.nodeCount = 0;
	if(this.head){
		var current = this.head;
		while(current){
			this.nodeCount++;
			current = current.next;
		}
	}
	return this;
}

SinglyLinkedList.prototype.concat = function(list){
	this.tail.next = list.head;
	this.tail = list.tail;
	this.nodeCount = this.nodeCount + list.nodeCount;
	return this;
}

SinglyLinkedList.prototype.partition = function(value){
	if(!this.head){
		return null;
	}
	if(!this.contains(value)){
		return null;
	}
	list.removeValue(value);
	var output = new SinglyLinkedList();
	output.head = new ListNode(value);
	var current = this.head;
	while(current){
		if(current.value >= value){
			output.appendValue(current.value, value);
		} else {
			output.prependValue(current.value, value);
		}
		if(current.next == null){
			var endOfList = current;
		}
		current = current.next;
	}
	return output.setTail();
}

SinglyLinkedList.prototype.setTail = function(){
	if(!this.head){
		return null;
	}
	var current = this.head;
	while(current.next){
		current = current.next
	}
	this.tail = current;
	return this;
}

SinglyLinkedList.prototype.getRandomNode = function(returnValue=false){
	if(!this.head){
		return null;
	}
	var current = this.head;
	var count = rand(0, this.nodeCount - 1);
	while(count --){
		current = current.next;
	}
	if(returnValue == 'value'){
		return current.value;
	}
	return current;
}

SinglyLinkedList.prototype.copyList = function(){
	var output = new SinglyLinkedList();
	if(!this.head){
		return null;
	}
	var current = this.head;
	while(current){
		output.addBack(current.value);
		current = current.next;
	}
	return output;
}

SinglyLinkedList.prototype.isLoop = function(){
	if(!this.head){ return false; }
	if(!this.head.next){ return false; }
	var tortoise = this.head;
	var hare = this.head.next;
	while(tortoise && hare && hare.next){
		if(hare == tortoise || hare.next == tortoise){
			return true;
		}
		tortoise = tortoise.next;
		hare = hare.next.next;
	}
	return false;
}

SinglyLinkedList.prototype.rIsLoop = function(tortoise=null, hare=null){
	if(!this.head){ return false; }
	if(!this.head.next){ return false; }
	tortoise = this.head;
	hare = this.head.next;
	if(!tortoise || !hare || !hare.next){
		return false;
	}
	if(hare == tortoise || hare.next == tortoise){
		return true;
	}
	return this.rIsLoop(tortoise.next, hare.next.next)
}

SinglyLinkedList.prototype.rLength = function(node, count=0){
	if(!this.head) { return null; }
	if(node === undefined) { node = this.head; }
	if(!node){
		return count;
	} else {
		count++;
		return this.rLength(node.next, count);
	}
}

SinglyLinkedList.prototype.flattenChild = function(){
	let current = this.head;
	while(current){
		if(current.child){
			let next_parent = current.next;
			current.next = current.child;
			let child_runner = current.child;
			while(child_runner.next){
				child_runner = child_runner.next;
			}
			child_runner.next = next_parent;
		}
		current = current.next;
	}
	return this;
}

SinglyLinkedList.prototype.bubbleSort = function(){
	if(!this.head || !this.head.next){
		return null;
	}
	let prev;
	let turtle;
	let hare;
	let isSorted = false;
	while(!isSorted){
		if(this.head.value > this.head.next.value){
			let temp = this.head;
			let temp2 = this.head.next.next;
			this.head = this.head.next;
			this.head.next = temp;
			temp.next = temp2;
		}
		prev = this.head;
		turtle = this.head.next;;
		hare = this.head.next.next;
		isSorted = true;
		while(hare){
			if(turtle.value > hare.value){
				let temp = turtle;
				prev.next = hare
				turtle.next = hare.next;
				hare.next = turtle;
				isSorted = false;
			}
			prev = turtle;
			turtle = hare;
			hare = hare.next;
		}
	}
	this.setTail();
	return this;
}

SinglyLinkedList.prototype.selectionSort = function(){
	if(!this.head){ return null; }
	let sortedPortion = this.head;
	while(sortedPortion.next){
		let minNode = this.min(sortedPortion);
		temp = sortedPortion.value;
		sortedPortion.value = minNode.value;
		minNode.value = temp;
		sortedPortion = sortedPortion.next;
	}
	return this;
}

SinglyLinkedList.prototype.setupLoop = function(n){
	let current = this.head;
	while(current.next){
		n--;
		if(n == 0){
			var target = current;
		}
		current = current.next;
	}
	if(target){
		current.next = target;
	}
	return this;
}

// SinglyLinkedList.prototype.quickSort = function(pivot=this.head){
// 	if(!pivot || !pivot.next){
// 		return this;
// 	}
// 	let left = new SinglyLinkedList();
// 	let right = new SinglyLinkedList();
// 	let current = pivot.next;
// 	while(current){
// 		if(current.value > pivot.value){
// 			right.addBack(current.value)
// 		} else {
// 			left.addBack(current.value);
// 		}
// 		current = current.next;
// 	}
// 	left.setTail();
// 	right.setTail();
// 	return this.quickSort(left).addBack(pivot.value).concat(this.quickSort(right.head));
// }


var a = generateRandomList();
a.display()

console.log("--- Creating Loop --")
a.setupLoop(2);
console.log(a.rIsLoop())
// a.display();
// var b = generateRandomList();
// var c = generateRandomList();

// a.head.next.child = b.head
// b.head.next.child = c.head;

// console.log("--- List A ---")
// a.display();
// console.log("--- List B ---")
// b.display();
// console.log("--- List C ---")
// c.display();
// console.log("Total Nodes: ", a.rLength() + b.rLength() + c.rLength())

// a.flattenChild()
// console.log("--- List A (flattened) ---")
// a.display();
// console.log("Total Nodes: ", a.rLength());
