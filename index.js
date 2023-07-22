// going to be using classes this time because i havent really used them at all

class linkedList {
  constructor() {
    this.head = null;
  }

  get tail() {
    let curretNode = this.head;
    while (curretNode.next) {
      curretNode = curretNode.next;
    }
    return curretNode;
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
}
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
