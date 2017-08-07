function Trie(){
	this.root = new TrieNode();
}

TrieNode {
	word: 'J',
	pointers:[ { word: 'JO', pointers:[]}, {word: 'JA'}]
}

function TrieNode(){
	this.pointers = [];
	this.word = null;
	this.character = '';
}

function objIndexOf(node, char){
	console.log(node)
	console.log(node.pointers)
	for(let i = 0; node.pointers.length; i++){
		let pointer_node = node.pointers[i];
		if(pointer_node.hasOwnProperty(char)){
			return i;
		}
	}
	return -1;
}

Trie.prototype.insert = function(str){
	let node = this.root;
	for(let i = 0; i < str.length; i++){
		let pointer = objIndexOf(node, str[i])
		console.log('pointer: ', pointer)
		while(pointer != -1){
			node = node.pointers[pointer]
		}
		let obj = {}
		obj[str[i]] = new TrieNode();
		node.pointers.push(obj)
		node = node.pointers[node.pointers.length -1]
		console.log('node: ', node)
		if(i == str.length - 1 && ! node.value){
			node.value = str;
		}
	}
	return this;
}

let trie = new Trie();
trie.insert('cody');
console.log(trie)

