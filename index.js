// going to be using classes this time because i havent really used them at all

class linkedList {
  constructor() {
    this.head = null;
  }

  get tail() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  get size() {
    let curretNode = this.head;
    while (curretNode.next) {
      curretNode = curretNode.next;
    }
    return curretNode.index + 1;
  }
  prepend(value) {
    let prevHead = this.head;
    this.head = null;
    let newNode = new node(value);
    newNode.next = prevHead;
    this.head = newNode;
    this.head.index = 0;
    let nextNode = this.head.next;
    while (nextNode) {
      nextNode.index++;
      nextNode = nextNode.next;
    }
  }
  append(value) {
    if (this.head == null) {
      this.head = new node(value);
      this.head.index = 0;
    } else {
      let newNode = new node(value);
      let currentNode = this.head;
      let index = 1;
      while (currentNode.next) {
        currentNode = currentNode.next;
        index++;
      }
      newNode.index = index;
      currentNode.next = newNode;
    }
  }

  at(index) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.index == index) return currentNode;
      currentNode = currentNode.next;
    }
  }
  pop() {
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next) {
        currentNode = null;
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let arr = new linkedList();
arr.append(2);
arr.append(3);
