// The two most important properties of a set is that elements are unordered and no member can occurs more than once
// Set definition:
  // A set containing no members is called an empty set
  // Two sets are considered equal if they containt exactly the same members
  // A set is considered a subset of another set if all members of the first set are contained in the second set

// Set operations:
  // Union: A new set is obtained by combining the members of one set with the members of another set
  // Intersection: A new set is obtaiend by adding all the members of one set that also exist in the second set
  // Difference: A new set is obtained by adding all the members of one set except those that also exist in the second set

function Set() {
  this.dataStore = [];
}

// Write a functions that simply returns the dataStore
Set.prototype.getData = function() {
  return this.dataStore;
}

// Write a helper function that will check if the member of a set already exists
Set.prototype.include = function(value) {
	for(i in this.dataStore){
		if(i == value){
			return true;
		}
	}
	return false;
}

// Write a function that will add members to the set. Remember the definition of a set
Set.prototype.add = function(value){
	if(this.dataStore.length > 0){
		if(typeof this.dataStore[0] != typeof value){
			console.log(typeof value + ' ' + value + ' not added.  Data set members must be of the same type!')
			return this;
		}
	} else {
		this.dataStore.push(value)
		return this;
	}
	for(i in this.dataStore){
		if(this.dataStore[i] == value){
			console.log(value + ' not added.  Data set members must not be duplicates!')
			return this;
		}
	}
	this.dataStore.push(value);
	return this;
}

// Write a function that will remove a member of a set
Set.prototype.remove = function(value) {
	for(i in this.dataStore){
		if(this.dataStore[i] == value){
			this.dataStore.splice(i, 1);
			break;
		}
	}
	return this;
}

// Write the union function. Remember, it should return a new set
Set.prototype.union = function(set) {
	var union = [];
	var check;
	var my_length = this.dataStore.length;
	var your_length = set.dataStore.length;
	if(my_length > your_length){
		union = this.dataStore.slice(0);
		for(i in set.dataStore){
			check = true;
			for(j in this.dataStore){
				if(set.dataStore[i] == this.dataStore[j]){
					check = false;
				}
			}
			if(check){
				union.push(set.dataStore[i]);
			}
		}
	} else {
		union = set.dataStore;
		for(i in this.dataStore){
			check = true;
			for(j in set.dataStore){
				if(this.dataStore[i] == set.dataStore[j]){
					check = false;
				}
			}
			if(check){
				union.push(this.dataStore[i]);
			}
		}
	}
	var result = new Set();
	result.dataStore = union;
	return result;
}

// Write the intersection function. Remember, it should return a new set
Set.prototype.intersection = function(set) {
	var intersection = [];
	for(i in this.dataStore){
		for(j in set.dataStore){
			if(this.dataStore[i] == set.dataStore[j]){
				intersection.push(this.dataStore[i])
				break;
			}
		}
	}
	var result = new Set();
	result.dataStore = intersection;
	return result;
}

// Write the difference function. Remember, it should return a new set
Set.prototype.difference = function(set) {
	var check;
	var difference = [];
	for(i in this.dataStore){
		check = false;
		for(j in set.dataStore){
			if(this.dataStore[i] == set.dataStore[j]){
				check = true;
			}
		}
		if(!check){
			difference.push(this.dataStore[i]);
		}
	}
	var result = new Set()
	result.dataStore = difference;
	return result;
}

// Write the subset function that checks if a set is a subset or not. If the proposed subset's length is greater than the set itself, it connot be a subset
Set.prototype.subset = function(set) {
	var check;
	if(set.dataStore.length > this.dataStore.length){
		return false;
	}
	for(i in set.dataStore){
		check = false;
		for(j in this.dataStore){
			if(set.dataStore[i] == this.dataStore[j]){
				check = true;
			}
		}
		if(!check){
			return false;
		}
	}
	return true;
}

a = new Set()
a.add(5).add(6).add(7)
b = new Set()
b.add(9).add(5)
console.log('is b a subset of a?', a.subset(b))
console.log('A union of B:', a.union(b))
console.log('A difference of B:', a.difference(b))
console.log('A intersection of B:', a.intersection(b))

c = new Set()
c.add(5).add('hello').add(7).add(5).remove(7)
console.log(c)