class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  printList() {
    let printArrayList = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      printArrayList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    //Return the array
    return printArrayList.join(" -> ");
  }
}
const newLL = new LinkedList(4);
newLL.append(8);
newLL.append(11);

console.log(newLL.printList());
