function MinHeap(){
	this.dataStore = [null];
}

MinHeap.prototype.insert = function(val){
	this.dataStore.push(val);
	let current_index = this.dataStore.length - 1;
	let current = this.dataStore[current_index];
	this.bubbleUp(current_index, current);
	return this;
}

MinHeap.prototype.bubbleUp = function(current_index, current){
	while(current_index > 1){
		let parent_index = Math.floor(current_index / 2);
		let parent = this.dataStore[parent_index];
		if(current < parent){
			this.dataStore[parent_index] = current;
			this.dataStore[current_index] = parent;
			current_index = parent_index;
		} else {
			break;
		}
	}
}

MinHeap.prototype.removeSmallest = function(){
	let output = this.dataStore[1];
	let new_root = this.dataStore.pop();
	if(this.dataStore.length > 2){
		this.dataStore[1] = new_root;
		this.bubbleDown(1, this.dataStore[1]);
	}
	return output;
}

MinHeap.prototype.bubbleDown = function(current_index, current){
	if(current_index < this.dataStore.length){
		let children = this.dataStore.slice(current_index * 2, current_index * 2 + 2);
		let min = Math.min(...children);
		while(min < current){
			let target = this.dataStore.indexOf(min);
			this.swap(current_index, target);
			current_index = target;
			children = this.dataStore.slice(current_index * 2, current_index * 2 + 2);
			min = Math.min(...children);
		}
	}
}

MinHeap.prototype.swap = function(i, j){
	let temp = this.dataStore[i];
	this.dataStore[i] = this.dataStore[j];
	this.dataStore[j] = temp;
}

function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

describe('minheap', function(){
	it('keeps the min value at the front of the heap', function(){
		let heap = new MinHeap();
		for(let i = 1; i < rand(50, 100); i++){
			heap.insert(rand(1, 100000))
		}
		while(heap.dataStore.length > 1){
			let true_min = Math.min(...heap.dataStore.slice(1));
			expect(heap.dataStore[1]).toBe(true_min);
			expect(heap.removeSmallest()).toBe(true_min);
		}
		expect(heap.dataStore.length).toBe(1);
		console.log(heap);
	})
})
