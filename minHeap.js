function MinHeap(){
	this.dataStore = [null];
}

MinHeap.prototype.insert = function(value){
	this.dataStore.push(value);
	let index = Math.floor(this.dataStore.length - 1 / 2);
	let element = this.dataStore.length - 1;
	while(index > 0){
		let bounds = Math.min(index + 2, this.dataStore.length);
		// console.log('bounds: ', bounds)
		for(let i = index; i < bounds; i++){
			if(this.dataStore[i] > this.dataStore[element]){
				let temp = this.dataStore[i];
				this.dataStore[i] = this.dataStore[element]
				this.dataStore[element] = temp;
				element = i;
				index = i;
				break;
			}
		}
		// console.log('index: ', index)
		if(index == 1){
			break;
		}
		index = Math.floor(index / 2);
	}
	return this;
}

MinHeap.prototype.pop = function(){
	if(this.dataStore.length == 2){
		return this.dataStore.pop();
	}
	let output = this.dataStore[1];
	this.dataStore[1] = this.dataStore.pop();
	let element = 1
	let index = 2;
	while(index < this.dataStore.length){
		let bounds = Math.min(index + 2, this.dataStore.length);
		for(let i = index; i < bounds; i++){
			if(this.dataStore[i] < this.dataStore[element]){
				let temp = this.dataStore[i];
				this.dataStore[i] = this.dataStore[element]
				this.dataStore[element] = temp;
				element = i;
				index = i;
				break; zeus 
			}
			index = index * 2;
		}
	}
	return output;
}

MinHeap.prototype.heapifyArray = function(arr){
	let heap = new MinHeap();
	for(i in arr){
		console.log(arr[i])
		heap.insert(arr[i])
	}
	return heap;
}

function randArray(n){
	let output = [];
	while(n--){
		output.push( Math.round( Math.random() * 9 ) )
	}
	return output;
}

MinHeap.prototype.isEmpty = function(){
	return this.dataStore.length - 1 == 0;
}

let arr = randArray(Math.round(Math.random() * 20))
console.log(arr);

let heap = new MinHeap()
// heap.insert(1);
// heap.insert(6)
// heap.insert(1)
// heap.insert(7)
// // heap.insert(7);
// // console.log(heap)
let next_heap = heap.heapifyArray(arr);
console.log(next_heap)
console.log('---- Popping ----')
let counter = next_heap.dataStore.length - 1;
while(counter--){
	console.log(next_heap.pop())
	console.log(next_heap)
}