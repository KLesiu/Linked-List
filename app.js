class LinkedList{
constructor(){
    this.head=this.tail=null
}
append(value){
   
    if(!this.tail){
        this.head=this.tail=new Node(value)
    }else{
        let tailOld=this.tail
        this.tail=new Node(value)
        tailOld.next=this.tail
        this.tail.prev=tailOld

    }
}
prepend(value){
    if(!this.head){
        this.head=this.tail=new Node(value)
    }else{
        let headOld=this.head
        this.head=new Node(value)
        headOld.prev=this.head
        this.head.next=headOld
    }
}
size(){
let next=this.head
let items=0
while(next!=null){
    next=next.next
    items++
}
return items
}
showFirst(){
    return this.head
}
showLast(){
    return this.tail
}
at(index){
let start=this.head
let i=1;
while(i!=index){
    if(start==null){
        return null
    }else{
        start=start.next
        i++
    }
   
}
if(start==this.tail){
    return this.tail
}return start

}
pop(){
    let lastItem=this.tail
    let newLastItem=this.tail.prev
    lastItem=null
    this.tail=newLastItem
    newLastItem.next=null
    
    return newLastItem
}
contains(value){
    let node=this.head
    if(node.value==value){
        return true
    }
    if(this.tail.value==value){
        return true
    }
    for(let i=0;i<=this.size();i++){
        node=node.next
        if(node.value==value){
            return true
        }
        i++

    }

    return false
}
find(value){
    let node=this.head
    if(node.value==value){
        return 1
    }
    if(this.tail.value==value){
        return this.size()
    }
    for(let i=2;i<=this.size();i++){
        node=node.next
        if(node.value==value){
            return i
        }
        

    }

    return null

}
toString(){
    let string=``;
    let current=this.head
    let i;
  for(i=0;i<this.size();i++){
    string+=`(${current.value})->`
    current=current.next
  }
  string+=`null`
    console.log(string)
}
insertAt(value,index){
    if(index==0||index>this.size()){
        return `Min index is 0. Max index is ${this.size()}`
    }
    if(index==1){
        this.prepend(value)
    }else if(index==this.size()){
        this.append(value)
    }else{
        let start=this.head
        for(let i=1;i<=index;i++){
            start=start.next
            if(i==index){
                let create=new Node(value)
                create.next=start.prev
                create.prev=start.prev.prev
                start.prev.prev.next=create
                start.prev.prev=create
                create=start.prev
                return start.prev
                
            }
        }
    }


}
removeAt(index){
    if(index==0||index>this.size()){
        return `Min index is 0. Max index is ${this.size()}`
    }
    if(index==1){
        let newHead=this.head.next
        newHead.prev=null
        this.head=newHead
         }
    else if(index==this.size()){
        this.pop()
    }else{
        let start=this.head
        for(let i=1;i<=index;i++){
            start=start.next
            if(i==index){
                let wantToDelete=start.prev
                start.prev.prev.next=start.prev.next
                start.prev.next.prev=start.prev.prev
                wantToDelete=null
            }
        }
    }     
}
}
class Node{
    constructor(value,prev,next){
        this.value=value
        this.prev=prev||null
        this.next=next||null
        
    }
}
const list= new LinkedList





