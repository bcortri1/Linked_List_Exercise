/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.push(val);
        }
        else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    /** pop(): return & remove last item. */

    pop() {
        let removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let node = this.head;
            for (let i = 0; i < this.length - 2; i++) {
                node = node.next;
            }
            this.tail = node
            node.next = null;
        }
        this.length--;
        return removedNode.val;
    }

    /** shift(): return & remove first item. */

    shift() {
        if(this.length === 1){
            return this.pop()
        }
        else{
            let node = this.head;
            this.head = this.head.next;
            this.length--;
            return node.val;
        }
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx >= this.length){
            throw new Error("Invalid idx");
        }
        else{
            let node = this.head;
            for(let i = 0; i < idx; i++ ){
                node = node.next
            }
            return node.val
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx >= this.length){
            throw new Error("Invalid idx");
        }
        else{
            let node = this.head;
            for(let i = 0; i < idx; i++ ){
                node = node.next
            }
            node.val = val;
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if((this.length === 0) || (idx === this.length)){
            this.push(val);
        }
        else{
            if (idx > this.length){
                throw new Error("Invalid idx");
            }
            else{
                let newNode = new Node(val);
                let node = this.head;
                for(let i = 0; i < idx-1; i++ ){
                    node = node.next
                }
                newNode.next = node.next;
                node.next = newNode;
                this.length++;
            }
        }
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if((idx === 0)){
            console.log("shifting")
            return this.shift();
        }
        else if(idx === this.length-1){
            console.log("popping")
            return this.pop()
        }
        else{
            if (idx >= this.length){
                throw new Error("Invalid idx");
            }
            else{
                let leftNode = this.head;
                let midNode = leftNode.next; //Node to be removed
                let rightNode = midNode.next;
                for(let i = 0; i < idx-1; i++ ){
                    leftNode = leftNode.next;
                    midNode = leftNode.next;
                    rightNode = midNode.next;
                }
                leftNode.next = rightNode;
                this.length--;
                return midNode.val;
            }
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        if(this.length === 0 ){
            return 0;
        }
        else{
            let node = this.head
            let sum = 0;
            for(let i = 0; i < this.length; i++){
                sum += node.val;
                node= node.next
            }
            return (sum/this.length);
        }
    }
}

module.exports = LinkedList;
