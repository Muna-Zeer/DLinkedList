import Node from "./Node.js";
class DoublyLinkedList {
  constructor() {
    // the first node in Double LinkedList
    this.head = null;
    //the last node in Double LinkedList;
    this.tail = null;
    this.length = 0;
  }
  // important operations in DoublyLinkedList
  isEmpty() {
    return (this.length = 0);
  }

  //append newNode to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++; 
}
  //remove last node form the list and return the lst node

  pop() {
    if (!this.tail) return null; // Check if list is empty
    let lastNode = this.tail;
    this.tail = lastNode.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    lastNode.prev = null;
    this.length--;
    return lastNode.data;
}
  //delete first node from the list

shift() {
    if (!this.head) return null; 
    let firstNode = this.head;
    this.head = firstNode.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    firstNode.next = null;
    this.length--;
    return firstNode.data
    ;
}


  //add Node in the head of the list
  unshift(val) {
    let headNode = new Node(val);
    if (!this.head) {
      this.head = headNode;
      this.tail = headNode;
    } else {
      this.head.prev = headNode;
      headNode.next = this.head;
      this.head = headNode;
    }
    this.length++;
    return headNode;
  }
  // The get method takes an index and return the value of node
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      if (!curNode) return null;
      curNode = curNode.next;
    }
    return curNode ? curNode.data : null;
  }

  //inset newNode based on it's index
  set(index, value) {
    let curNode=this.head;
    for(let i=0;i<index&&curNode!==null;i++){
        curNode=curNode.next;
    }
    if(curNode!==null){
        curNode.data=value;
        return true;
    }
    return false;
  }

  //inset newNode based on it's index
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index == this.length) return !!this.push(val);

    let newNode = new Node(val);
    let curNode=this.head;
for(let i=0;i<index&&curNode!==null;i++){
    curNode=curNode.next;

}
newNode.next=curNode.next;
newNode.prev=curNode;
curNode.next.prev=newNode;
curNode.next=newNode;
    this.length++;
    return true;
  }

  //remove Node based on its index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
        curNode = curNode.next;
    }
    let removedNode = curNode;
    curNode.prev.next = curNode.next;
    curNode.next.prev = curNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode.data;
}
}

export default DoublyLinkedList;
