function hashMap(capacity){
	this.capacity = capacity;
	this.elementCount = 0;
	this.table = [];
}

hashMap.prototype.add = function(key, value, boolean=false){
	let hash = key.hashCode();
	let index = mod(hash, this.capacity);
	if(!this.table[index]){
		this.table[index] = [[key, value]];
	} else { 
		for(var i = 0; i < this.table[index].length; i++){
			if(this.table[index][i][0] == key){
				if(boolean === true){
					this.table[index][i][1] = value;
					console.log('Duplicate key "' + key +  '" found!  The original value has been overwritten.');
				} else {
					console.log('Duplicate key "' + key +  '" found!  The original value was NOT overwritten.  To overwrite the value pass the optional argument "true" to the add method.');
				}
				return this;
			}
		}
		this.table[index].push([key,value]);
	}
	this.elementCount++;
	return this;
}

hashMap.prototype.isEmpty = function(){
	if(this.elementCount === 0){
		return true;
	} else {
		return false;
	}
}

hashMap.prototype.findKey = function(key){
	hash = key.hashCode();
	index = mod(hash, this.capacity);
	for(i in this.table[index]){
		if(this.table[index][i][0] == key){
			return this.table[index][i][1];
		}
	}
	return null;
}

hashMap.prototype.remove = function(key){
	hash = key.hashCode();
	index = mod(hash, this.capacity);
	for(i in this.table[index]){
		if(this.table[index][i][0] == key){
			this.elementCount--;
			return this.table[index].splice(i, 1);
		}
	}
	return null;
}

hashMap.prototype.reHashKeys = function(){
	var key;
	var value;
	prevTable = this.table;
	this.table = [];
	for(var i = 0; i < prevTable.length; i++){
		if(prevTable[i]){
			for(j in prevTable[i]){
				key = prevTable[i][j][0];
				value = prevTable[i][j][1];
				this.add(key, value);
			}
		}
	}
}

hashMap.prototype.grow = function(){
	this.elementCount = 0;
	this.capacity = Math.floor(this.capacity * 1.5);
	this.reHashKeys();
	return this;
}

hashMap.prototype.addMap = function(hashMap, boolean=false){
	for(var i = 0; i < hashMap.table.length; i++){
		if(hashMap.table[i]){
			for(var j = 0; j < hashMap.table[i].length; j++){
				key = hashMap.table[i][j][0];
				value = hashMap.table[i][j][1];
				this.add(key, value, boolean);
			}
		}
	}
	return this;
}

hashMap.prototype.loadFactor = function(){
	var tableCount = 0;
	for(i in this.table){
		if(this.table[i])
			tableCount++;
	}
	console.log(this.elementCount + " elements.");
	console.log(tableCount + "/" + this.capacity + " indexs are being used.");
	return this;
}

hashMap.prototype.setSize = function(size){
	this.elementCount = 0;
	this.capacity = size;
	this.reHashKeys();
	return this;
}

String.prototype.hashCode = function(){
	var hash = 0;
	if(this.length == 0) return hash;
	for(var i = 0; i < this.length; i++){
		char = this.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash &= hash;
	}
	return hash;
}

function mod(input, div){
	return (input % div + div) % div;
}

a = new hashMap(10);
b = new hashMap(10);
c = new hashMap(10);
a.add("Cody","Williams").add("five","five").add("six", "six").add("four", "four").add("Cody","Walker").add("Bob","Ross").add("Mandy","Madeupperson").add("Tom","Testington").add("Ziggy","Stardust");
b.add("Eric","Walker").add("one", "one").add("two","two").add("three","three");
c.add("seven", "seven").add("eight","eight").add("nine","nine");

console.log("A: ", a.table);
console.log('B: ', b.table);
console.log('C: ', c.table);
a.addMap(b).addMap(c);
console.log(a.elementCount);
console.log(a.table);
a.setSize(100);
console.log("\n");
console.log(a.table);
a.loadFactor()
a.setSize(12);
console.log("\n")
console.log(a.table)
a.loadFactor()
a.setSize(20);
console.log("\n")
console.log(a.table)
a.loadFactor()
a.setSize(15);
console.log("\n")
console.log(a.table)
a.loadFactor()
a.grow();
console.log("\n")
console.log(a.table)
a.loadFactor()