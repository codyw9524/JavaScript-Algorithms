
function linkedList(){
	this.head = null;
	this.tail = null;
	this.length = function(){
		var count = 0;
		var current = this.head
		while(current){
			count++;
			current = current.next;
		}
		return count;
	}
	this.add = function(value){
		if(!this.head){
			this.head = new node(value);
			this.tail = this.head;
		} else {
			current = this.head;
			while(current.next){
				current = current.next
			}
			current.next = new node(value);
			this.tail = current.next;
		}
	}
	this.removeHead = function(){
		originalHead = this.head;
		if(this.head.next){
			this.head = this.head.next
		} else {
			this.head = null;
		}
		return originalHead;
	}
}
function node(value){
	this.value = value;
	this.next = null;
}

function mergeSortList(list){
	var length = list.length();
	var left = new linkedList;
	var right = new linkedList;
	if(list.length < 2){
		return list;
	}
	for(var i = 0; i < length; i++){
		if(i < length / 2){
			left.add(list.removeHead());
		} else {
			right.add(list.removeHead());
		}
	}
	return merge(mergeSortList(left), mergeSortList(right));
}

function merge(left, right){
	var output = new linkedList();

}
var list = new linkedList();
list.add(5);
list.add(10);
list.add(11);
list.removeHead();
console.log(list);