class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //InsertFirst
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
    //InsertLast
    insertLast(data) {
        let node = new Node(data);
        let current;
        //if list is empty
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            } current.next = node;
        } this.size++
    }
    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        }
        else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }
    findElement(fdata) {
        let current = this.head;
        let count = 0;
        while (current.next) {
            if (current.data == fdata) {
                console.log(fdata, 'Found at:', count);
                break
            } else {
                current = current.next;
                count++;
                if (count == this.size - 1) {
                    console.log('Element not found')
                    ll.insertLast(fdata)
                    this.size++
                    break
                }
            }
        }
    }
    insertAt(data, pos) {
        let node = new Node(data)
        let current = this.head;
        let count = 0;
        if (pos == 0) {
            this.head = node;
            node.next = current;
            this.size++
        } else if (0 < pos && pos <= this.size) {
            while (pos > count + 1) {
                current = current.next;
                count++
            } node.next = current.next;
            current.next = node;
            this.size++
        } else {
            console.log("Position Entered is out of range, please enter number between 0 and", this.size)
        }
    }
    deleteFirst() {
        if (this.head) {
            this.head = this.head.next;
            this.size--
        } else {
            return null
        }
    }
    deleteLast() {
        if (this.head) {
            let current = this.head;
            if (current.next == null) {
                this.head = null
            } else {
                while (current.next.next) {
                    current = current.next
                } current.next = null
            }
        } else {
            console.log('Nothing to delete')
        }
    }
}




ll = new linkedList
ll.insertLast(6)
ll.sortedInsert(3)
ll.sortedInsert(36)
ll.sortedInsert(6)
ll.sortedInsert(23)
ll.sortedInsert(105)
ll.sortedInsert(1)
ll.insertAt(35, 1)
ll.insertAt(70, 0)
ll.insertLast(6)
ll.insertFirst(32)
ll.insertFirst(54)
ll.insertFirst(33)
ll.deleteFirst()

ll.printList()