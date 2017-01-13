function MinHeap(){
	this.dataStore = [null];
}

MinHeap.prototype.insert = function(val){
	this.dataStore.push(val);
	let current_index = this.dataStore.length - 1;
	let parent_index = Math.floor(current_index / 2);
	let current = this.dataStore[current_index];
	while(parent_index > 0){
		parent_index = Math.floor(current_index / 2);
		parent = this.dataStore[parent_index];
		if(current < parent){
			this.dataStore[parent_index] = current;
			this.dataStore[current_index] = parent;
			current_index = parent_index;
		} else {
			break;
		}
	}
}

let heap = new MinHeap();
heap.insert(10);
heap.insert(9);
heap.insert(8);
heap.insert(7);
heap.insert(6);
heap.insert(5);
console.log(heap)