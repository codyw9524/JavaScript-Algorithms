// The two most important properties of a set is that elements are unordered and no member can occurs more than once
// Set definition:
  // A set containing no members is called an empty set
  // Two sets are considered equal if they containt exactly the same members
  // A set is considered a subset of another set if all members of the first set are contained in the second set

// Set operations:
  // Union: A new set is obtained by including all the members of the first set with all members of another set that haven't already been included.
  // Intersection: A new set is obtaiend by adding all the members of one set that also exist in the second set
  // Difference: A new set is obtained by adding all the members of one set except those that also exist in the second set

function Set() {
  this.dataStore = [];
}

// Write a functions that simply returns the dataStore
Set.prototype.getData = function() {

}

// Write a helper function that will check if the member of a set already exists
Set.prototype.include = function(value) {

}

// Write a function that will add members to the set. Remember the definition of a set
Set.prototype.add = function(value){

}

// Write a function that will remove a member of a set
Set.prototype.remove = function(value) {

}

// Write the union function. Remember, it should return a new set
Set.prototype.union = function(set) {

}

// Write the intersection function. Remember, it should return a new set
Set.prototype.intersection = function(set) {

}

// Write the difference function. Remember, it should return a new set
Set.prototype.difference = function(set) {

}

// Write the subset function that checks if a set is a subset or not. If the proposed subset's length is greater than the set itself, it connot be a subset
Set.prototype.subset = function(set) {

}
