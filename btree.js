function BTree(){
	this.root = null;
	this.limit = 2;
}
function Node(){
	this.keys = [];
	this.leafs = null;
}

function quickSort(arr) {
	var l_arr = [];
	var g_arr = [];
	if(arr.length < 2){
		return arr;
	}
	let pivot = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > pivot){
			g_arr.push(arr[i]);
		} else {
			l_arr.push(arr[i]);
		}
	}
	return quickSort(l_arr).concat(pivot).concat(quickSort(g_arr));
}

BTree.prototype.findNode = function(value, current=this.root, parents=[]){
	if(current.leafs === null){
		return {node: current, parents: parents};
	} else {
		parents.push(current);
	}
	for(var i = 0; i < current.keys.length; i++){
		if(current.keys[i] > value){
			var target = i;
		}
	}
	if(target !== undefined){
		i = target;
	}
	return this.findNode(value, current.leafs[i], parents);
}

BTree.prototype.insert = function(value){
	let node = new Node();
	if(!this.root){
		this.root = node;
		node.keys.push(value);
	} else {
		let obj = this.findNode(value);
		let current = obj.node;
		let parents = obj.parents;
		// console.warn('parents : ', parents);
		if(current.keys.length < this.limit){
			current.keys.push(value);
			quickSort(current.keys);
		}
		else if(current.keys.length == this.limit){
			current.keys.push(value);
			quickSort(current.keys);
			//loop through parents and attempt to split upward
			if(parents.length > 0){
				for(var j = parents.length - 1; j > -1; j--){
					if(parents[j].keys.length == this.limit){
						continue
					}
					let mid = current.keys.splice(Math.floor(current.keys.length/2), 1)[0];
					parents[j].keys.push(mid);
				//loop through parent leafs
					let left = new Node();
					left.keys = current.keys.splice(0,1);
					let right = new Node();
					right.keys = current.keys.splice(0,1);
					if(mid > parents[j].keys[0]){
						parents[j].leafs.push(left);
						parents[j].leafs.push(right);
					} else {
						parents[j].leafs.unshift(right);
						parents[j].leafs.unshift(left);
					}
					parents[j].keys = quickSort(parents[j].keys);
					console.log('PARENTS ARRAY : ', parents[j].keys)
				}
			} else {
			//split downwards
				current.leafs = [];
				let newNode = new Node();
				newNode.keys = current.keys.splice(0,1);
				current.leafs.push(newNode);
				let nextNode = new Node();
				nextNode.keys = current.keys.splice(1,1);
				current.leafs.push(nextNode);
			}
		}
	}
	return this;
}

let a = new BTree();
a.insert(10);
a.insert(20);
a.insert(30);
a.insert(40);
a.insert(15);
a.insert(18);
// a.insert(50);
// a.insert(60);
console.log(JSON.stringify(a));
// console.log(quickSort([20,15]))