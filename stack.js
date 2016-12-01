function Stack(){
	this.data = [];
}

function Node(value){
	this.value = value;
}

Stack.prototype.push = function(value){
	let node = new Node(value);
	this.data.push(node);
	return this;
}

Stack.prototype.pop = function(){
	return this.data.pop();
}

Stack.prototype.size = function(){
	return this.data.length;
}

Stack.prototype.contains = function(value){
	for(let i = 0; i < this.data.length; i++){
		let node = this.data[i];
		if(node.value == value){
			return node;
		}
	}
	return null;
}

let a = new Stack();

a.push(5).push(10).push(15);
console.log(a.contains(15));
console.log(a);


