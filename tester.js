function Set() {
  this.dataStore = [];
}
// Write a functions that simply returns the dataStore
Set.prototype.getData = function() {
  return this.dataStore = [];
}
// Write a helper function that will check if the member of a set already exists
Set.prototype.include = function(value) {
  for(var i=0; i<this.dataStore.length; i++){
    if(this.dataStore[i]===value){
      return true;
    }
  }
  return false;
}
// Write a function that will add members to the set. Remember the definition of a set
Set.prototype.add = function(value){
  if(!this.include(value)){
    this.dataStore.push(value);
  }
  return this;
}
// Write a function that will remove a member of a set
Set.prototype.remove = function(value) {
  var idx = this.indexOf(value);
  if(idx>0){
    this.dataStore.splice(idx, 1);
    return value;
  }
  return false;
}
// Write the union function. Remember, it should return a new set
Set.prototype.union = function(set) {
  var newSet = new Set();
  for(var i=0;i<this.dataStore.length;i++){
    newSet.dataStore.push(this.dataStore[i]);
  }
  for(var i=0; i<set.dataStore.length;i++){
    if(!(newSet.include(set.dataStore[i]))){
      newSet.dataStore.push(set.dataStore[i])
    }
  }
  return newSet;
}
// Write the intersection function. Remember, it should return a new set
Set.prototype.intersection = function(set) {
  var set3 = new Set();
  var long = this;
  var short = set;
  if (this.dataStore.length < set.dataStore.length){
    long = set;
    short = this;
  }
  //The point of setting short and long above is because if one of the two
  //sets is much larger than the other, it wouldn't make sense to iterate through
  //the longer set to see what is included in both.
  for(var i=0; i<short.dataStore.length;i++){
    if(long.include(short.dataStore[i])){
      set3.add(short.dataStore[i]);
    }
  }
  return set3;
}
// Write the difference function. Remember, it should return a new set
Set.prototype.difference = function(set) {
  var set3 = new Set();
  for(var i=0; i<this.dataStore.length;i++){
    if(!(set.include(this.dataStore[i]))){
      set3.add(this.dataStore[i]);
    }
  }
  return set3;
}
//Write the subset function that checks if a set is a subset or not.
//If the proposed subset's length is greater than the set itself, it can't be a susbet.
Set.prototype.subset= function(set){
  if(set.dataStore.length>this.dataStore.length){
    return false;
  }
  for(var i=0;i<set.dataStore.length;i++){
    if(!this.include(set.dataStore[i])){
      return false;
    }
  }
  return true;
}
    var mySet = new Set();
    mySet.add(1).add(2).add(3).add(3);
    var mySet2 = new Set();
    mySet2.add(3).add(4).add(5);
    var mySet4 = new Set();
    mySet4.add(1).add(2);
    var mySet5 = new Set();
    mySet5.add(1).add(3);
    var mySet6 = new Set();
    mySet6.add(1).add(2).add(3).add(4);
    var mySet7 = new Set();
    mySet7.add(1).add(4).add(2);
    console.log('myset1: ', mySet);
    console.log('mySet2: ', mySet2)
    console.log('mySet4: ', mySet4)
    console.log('mySet5: ', mySet5)
    console.log('mySet6: ', mySet6)
    console.log('mySet7: ', mySet7)
    console.log('Union 1 => 2: ', mySet.union(mySet2));
    console.log('Intersection 1 => 2: ', mySet.intersection(mySet2));
    console.log('Difference 1 => 2: ', mySet.difference(mySet2));
    console.log('Subset 4 => 1: ', mySet.subset(mySet4));
    console.log('Subset 5 => 1: ',mySet.subset(mySet5));
    console.log('Subset 6 => 1: ',mySet.subset(mySet6));
    console.log('Subset 7 => 1: ',mySet.subset(mySet7));
