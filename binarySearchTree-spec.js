function bstNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function binarySearchTree(){
	this.root = null;
}

binarySearchTree.prototype.add = function(value){
	var newNode = new bstNode(value);
	if(!this.root){
		this.root = newNode;
	} else {
		var current = this.root;
		while(current){
			if(value > current.value){
				if(!current.right){
					current.right = newNode;
					break;
				} else {
					current = current.right;
				}
			} else {
				if(!current.left){
					current.left = newNode;
					break;
				} else {
					current = current.left;
				}
			}
		}
	}
	return this;
}

binarySearchTree.prototype.contains = function(value){
	if(!this.root){
		return false;
	}
	var current = this.root;
	while(current){
		if(current.value == value){
			return true;
		}
		if(value > current.value){
			current = current.right;
		} else {
			current = current.left;
		}
	}
	return false;
}

binarySearchTree.prototype.min = function(node=this.root){
	//***iteratively***
	// if(!this.root){
	// 	return null;
	// }
	// var current = this.root;
	// while(current.left){
	// 	current = current.left;
	// }
	// return current.value;

	//***recursively***
	if(!node){
		return null;
	}
	if(node.left){
		return this.min(node.left)
	}
	return node.value
}

binarySearchTree.prototype.max = function(node=this.root){
	//***iteratively***
	// if(!this.root){
	// 	return null;
	// }
	// var current = this.root;
	// while(current.right){
	// 	current = current.right;
	// }
	// return current.value;

	//***recursively***
	if(!node){
		return null;
	}
	if(node.right){
		return this.min(node.right);
	}
	return node.value;
}

binarySearchTree.prototype.isEmpty = function(){
	if(!this.root){
		return true;
	} else {
		return false;
	}
}

binarySearchTree.prototype.size = function(node=this.root){
	if(!this.root){
		return null;
	}
	if(!node){
		return 0;
	}
	if(!node.left && !node.right){
		return 1;
	} else {
		return this.size(node.left) + this.size(node.right);
	}
}

binarySearchTree.prototype.depthFirstSearch = function(node=this.root){
	if(!this.root){
		return null;
	}
	if(node){
		console.log(node.value)
		this.depthFirstSearch(node.left);
		this.depthFirstSearch(node.right);
	}
}

binarySearchTree.prototype.height = function(node=this.root){
	if(!this.root){
		return null;
	}
	if(!node){
		return 0;
	}
	var left = this.height(node.left);
	var right = this.height(node.right);
	return Math.max(left, right) + 1;
}

binarySearchTree.prototype.isBalanced = function(node=this.root){
	if(!this.root){
		return null;
	}
	if(Math.abs(this.height(node.right) - this.height(node.left) > 1)){
		return false;
	} else {
		if((node.right && !this.isBalanced(node.right)) || (node.left && !this.isBalanced(node.left))){
			return false;
		} 
	}
	return true;
}

binarySearchTree.prototype.inOrderTraversal = function(node=this.root){
	if(!this.root){
		return null;
	}
	if(node){
		this.inOrderTraversal(node.left);
		console.log(node.value);
		this.inOrderTraversal(node.right);
	}
}

binarySearchTree.prototype.isValid = function(node=this.root){
	var queue = [];
  function Task(node, max, min){
	  this.node = node;
	  this.max = max;
	  this.min = min;
  }
  queue.push(new Task(node, Infinity, -Infinity));
  let task;
  while(task = queue.shift()) {
    if(task.node.value <= task.min || task.node.value > task.max){
        return false;
    }
    if(task.node.left){
        queue.push(new Task(task.node.left, task.node.value, task.min));
    }
    if(task.node.right){
        queue.push(new Task(task.node.right, task.max, task.node.value));
    }
  }
  return true;
}

function arrayToBST(arr, output=new binarySearchTree()){
	if(arr.length == 0){
		return;
	}
	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle + 1);
	output.add(arr[middle]);
	arrayToBST(left, output);
	arrayToBST(right, output);
	return output;
}

let a = arrayToBST([1,2,3,4,5,6,7,8,9,10]);
console.log(a.isBalanced());

// describe('bst', function(){
// 	it('has a valid tree', function(){
// 		a = new binarySearchTree();
// 		a.add(100).add(50).add(40).add(1).add(125).add(150).add(140);
// 		a.add(60).add(120);
// 		expect(a.isBalanced()).toBe(true);
// 	})
// 	it('does not have a valid tree', function(){
// 		a = new binarySearchTree();
// 		a.add(100).add(50).add(40).add(1).add(125).add(150).add(140);
// 		expect(a.isBalanced()).toBe(false);
// 	})
// })
