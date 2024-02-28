class DoublyLinkedList{
    constructor(){
        // the first node in Double LinkedList
        this.head=null;
        //the last node in Double LinkedList;
        this.tail=null;
    }
    // important operations in DoublyLinkedList
    isEmpty(){
        if(this.head=null)return true
        return false;
    }

    //append newNode to the end of the list 
addLastNode(val){
    
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
    


}