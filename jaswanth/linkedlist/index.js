// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    
    constructor(data, next = null){
        
        this.data = data;
            
        this.next = next;
        
    }
    
}

class LinkedList {
    
    constructor(){
        
        this.head = null;
        
    }
    
    
    size(){ 
        let counter=0;
        let node= this.head;
        
        while(node){
            counter++;
            node=node.next;
            
        }
        
        return counter;
        
    }
    
    getFirst(){
        
        return this.head;
          //return getAt(0);
    }
    getLast(){
        if(!this.head){
            return null;
        }
        
        let node=this.head;
        while(node){
            if(!node.next){ return node;}
            node=node.next;
        }
    }
    
    clear(){
        
        this.head=null;
    }
    removeFirst(){
         if(!this.head){
            return null;
        }
        this.head=this.head.next;
    }
    
    removeLast(){
        if(!this.head){
            return;
        }
        
        if(!this.head.next){ this.head=null;return;}
        let previous= this.head;
        let node=this.head.next;
        while(node.next){
            
            previous=node;
            node=node.next;
        }
        previous.next=null;
    }
    insertLast(data){
     let last=this.getLast();
        if(last){
            last.next=new Node(data);
        }else{
            this.head=new Node(data);
        }
    }
    
    
    getAt(index){
        
        if(!this.head){
            return null;
        }
         let node=this.head;
         let counter=0;
        while(node){
            
            if(counter=== index){
                return node;
            }
            counter++;
            node=node.next;
        }
        return null;
    }
    
    removeAt(index){
        if(!this.head){ return null;}
        if(index===0){this.head=this.head.next;return;}
        
        const previous = this.getAt(index-1);
        
        if(!previous || !previous.next){
            
            return;
        }
        previous.next=previous.next.next;
        
        
    }
    insertAt(data,index){
         if(!this.head){
             
             this.head= new Node(data);
         }
        if(index===0){
            this.head=new Node(data,this.head);
        }
        
        let previous=this.getAt(index-1) || this.getLast();
        if(!previous){
            return;
        }
        previous.next=new Node(data,previous.next);
       
        
    }
    insertFirst(data){
       
       const node= new Node(data,this.head);
      
        this.head=node;
       // this.insertAt(data, 0);
    }
}

module.exports = { Node, LinkedList };
