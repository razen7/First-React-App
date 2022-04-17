class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.length = (value) ? 1 : 0;
    }

    createNode(value, next = null) {
        return {
            value: value,
            next: next,
        }
    }

    display() {
        let tmpPtr = this.head;
        while (tmpPtr) {
            console.log(tmpPtr.value)
            tmpPtr = tmpPtr.next;
        }
    }

    unshift(val) {
        let newNode = this
            .createNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    shift() {
        // write your code here.
        if (head.next) {
            let next = head.next;
            head = next;
        }
    }

    push(val) {
        if (this.head.value === undefined) {
            this.head.value = val;
        } else {
            let tmpPtr = this.head;
            while (tmpPtr.next != undefined) {
                tmpPtr = tmpPtr.next;
            }
            tmpPtr.next = {
                value: val,
            };
        }
        return true;
    }

    pop() {
        // write your code here.
        let tmpPtr1 = this.head;
        let tmpPtr2;
        while (tmpPtr1.next != null) {
            [tmpPtr2, tmpPtr1] = [tmpPtr1, tmpPtr1.next];
        }
        if (tmpPtr2)
            tmpPtr2.next = null;
    }

    deleteTarget(value) {
        // write your code here.
        let curPtr = this.head;
        let prevPtr;
        while (curPtr != null) {
            if (curPtr.value == value) {
                // console.log(tmpPtr1.value, tmpPtr2.value)
                if (prevPtr)
                    prevPtr.next = curPtr.next;
                else
                    this.head = curPtr.next
                return true;
            }
            [prevPtr, curPtr] = [curPtr, curPtr.next];
        }
        return false;
    }
}

let listA = {
    value: 2,
    next: {
        value: 3,
        next: {
            value: 7
        }
    }
};

let listB = {
    value: 1,
    next: {
        value: 5,
        next: {
            value: 8
        }
    }
};

console.log(mergeTwoLinkedLists(listA, listB)); // Should return 1 -> 2 -> 3 -> 5 -> 7 -> 8

function mergeTwoLinkedLists(listA, listB) {
    let mergedLL = new LinkedList();
    while (listA || listB) {
        let a = listA ? listA.value : Infinity;
        let b = listB ? listB.value : Infinity;
        if (a < b) {
            mergedLL.push(a)
            listA = listA.next;
        } else if (b < a) {
            mergedLL.push(b)
            listB = listB.next
        }
    }
    return mergedLL;
}