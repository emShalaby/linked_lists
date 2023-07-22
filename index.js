// going to be using classes this time because i havent really used them at all

class linkedList {
  constructor() {
    this.head = null;
  }

  head() {
    return this.head;
  }

  append(value) {
    if (this.head == null) {
      this.head = new node(value);
      this.head.index = 0;
    } else {
      let newNode = new node(value);
      let currentNode = this.head;
      let index = 0;
      while (currentNode.next) {
        currentNode = currentNode.next;
        index++;
      }
      currentNode.next = newNode;
      currentNode.index = index;
    }
  }
}
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
