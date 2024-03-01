
import DoublyLinkedList from './DLinkedList.js';

// Create a new instance of DoublyLinkedList
const dll = new DoublyLinkedList();


dll.push(10); // Add 10 to the end of the list
dll.push(20); 
dll.push(30); 
dll.push(40); 
dll.push(50); 


console.log("display current linked list :");
console.log(dll); 
dll.unshift(5); // Add 5 to the beginning of the list
console.log("display current linked list by unshift :");
console.log(dll); 
console.log("remove the last node form the list :", dll.pop()); //remove the last node form the list 
console.log("remove the first node form the list :", dll.shift()); // remove the first node from the list 

console.log("display dll after removed items :");
console.log(dll); 

console.log("get access the item of position 1:", dll.get(1)); // get access the item of position 1

console.log("Set node at index 1 to 2024:", dll.set(1, 2024)); // Set the item at index 1 to 50

dll.insert(1, 30); // insert 30 at index 2

console.log("display dll after insertion:");
console.log(dll); // display current dll after insertion

console.log("remove node based in specific position 1:", dll.remove(2)); // remove node based in specific position

console.log(" after all modification look to final dll:");
console.log(dll); 
