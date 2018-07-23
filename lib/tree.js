'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {

  constructor() {
    this.root = null;
  }

  //add
  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    }

    else {
      this.addNode(this.root, node);
    }
  }

  addNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      }
      else {
        this.addNode(root.left, node);
      }
    }
    else {
      if (root.right === null) {
        root.right = node;
      }
      else {
        this.addNode(root.right, node);
      }
    }
  }

  //find
  find(node, value) {
    if (node.value === null) {
      return null;
    }
    else if (node.value > value) {
      return this.find(node.left, value);
    }
    else if (node.value < value) {
      return this.find(node.right, value);
    }
    else {
      return node.value;
    }
  }

  //remove
  remove(value) {
    let node = new Node(value);

    if (this.root.value === node.value) {
      return 'Unable to remove last item';
    }
    else {
      this.removeNode(this.root, node);
    }
  }

  removeNode(root, node) {
    if (root.value > node.value) {
      if (root.left.value === node.value) {
        root.left = null;
      }
      else {
        this.removeNode(root.left, node);
      }
    }
    else {
      if (root.right.value === node.value) {
        root.right = null;
      }
      else {
        this.removeNode(root.right, node);
      }
    }
  }

  //serialize
  serialize() {
    let toString = [];
    this.doTheWork(this.root, toString);

    return toString.join(', ');
  }

  doTheWork(node, arr) {
    if (!node) {
      arr.push('null');
      return;
    }
    arr.push(node.value);
    this.doTheWork(node.left, arr);
    this.doTheWork(node.right, arr);
  }

  //deserialize

  static deserialize(arr) {

    let newTree = new Tree;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== null) {
        newTree.add(arr[i]);
      }
    }
    return newTree;
  }
}

module.exports = Tree;