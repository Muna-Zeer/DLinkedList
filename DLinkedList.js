import Node from './Node.js'
class DoublyLinkedList{
    constructor(){
        // the first node in Double LinkedList
        this.head=null;
        //the last node in Double LinkedList;
        this.tail=null;
        this.length=0;
    }
    // important operations in DoublyLinkedList
    isEmpty(){
        if(this.head=null)return true
        return false;
    }

    //append newNode to the end of the list 
    push(val){
    
    let newNode= new Node(val);
    if(!this.head){
       this.head=newNode;
       this.tail=newNode;
    }
    else{
        this.tail.next=newNode;
        this.newNode.prev=tail;
        this.tail=newNode;
    }
}
 //remove last node form the list and return the lst node
pop(){
if(!this.tail){
   
return null;
}
let lastNode=this.tail;
this.tail=lastNode.prev;
this.tail.next=null;
lastNode.prev=null;

return lastNode;
}
//delete first node from the list
shift(){
    if(!this.head){return null;}
    let firstNode=this.head;
    this.head.prev=null;
    firstNode.next=null;
return firstNode;
}

//add Node in the head of the list 
unshift(val){
let headNode=new Node(val);
if(!this.head){
    this.head=headNode;
    this.tail=headNode;
}
else{
    this.head.prev=headNode;
headNode.next=this.head;
this.head=headNode;

}
return headNode;
}
// The get method takes an index number as a parameter and returns the value of the node at that index
get(index){
if(index<0){return null;}

let curNode;
//if index value is closer from the first part of the list
if(index< this.length/2){
curNode=this.head;
for(let i=0;i<index&&curNode!=null;i++){
    curNode=curNode.next;
}
}
else{
    //if the index of value is closer from the end of the list
    curNode=this.tail;
    for(let i=this.length-1;i>index&&curNode!=null;i--){
        curNode=curNode.prev;
    }
}

return curNode ?curNode.val:null;

}

//inset newNode based on it's index
set(index,value){
    let determinedNode=this.get(index);
    if(determinedNode!=null){
        determinedNode.value=value;
return true;
    }
    return false;
}

   //inset newNode based on it's index
   insert(index, val) {
if(index<0||index>this.length){return false;}
if(index===0){
    return this.unshift(val);
}
if(index==this.length)return this.push(val);
    
let newNode=new Node(val);
let prevNode=this.get(index-1);
let nextNode=prevNode.next;

prevNode.next=newNode;
newNode.prev=prevNode;
newNode.next=nextNode;
nextNode.prev=newNode;

this.length++;
return true;
   }

   //remove Node based on its index
   remove(index){
    if(index<0||index>this.length){return undefined}
    if(index===this.length-1) return this.pop()
   
if(index==0)return this.shift();

let deletedNode=this.get(index);

let prevNode=deletedNode.prev;
let nextNode=deletedNode.next;

prevNode.nextNode=nextNode;
nextNode.prev=prevNode;


deletedNode.next=null;
deletedNode.prev=null;
this.length--;
return true;
}
}


export default DoublyLinkedList;