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

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    }

    else{
      this.addNode(this.root, node);
    }
  }

  addNode(root, node) {
    if(root.value > node.value) {
      if(root.left === null) {
        root.left = node;
      }
      else{
        this.addNode(root.left, node);
      }
    }
    else {
      if(root.right === null) {
        root.right = node;
      }
      else{
        this.addNode(root.right, node);
      }
    }
  }


  find(value) {
    
    let currRoot = this.root;

    if(value === currRoot.value){
      return currRoot;
    }
    else if(value < currRoot.value) {
      currRoot = currRoot.left;
      currRoot.find(value);
    }
    else{
      currRoot = currRoot.right;
      currRoot.find(value);
    }
  }


  remove(value) {
    let node = new Node(value);

    if(this.root.value === node.value) {
      return 'Unable to remove last item';
    }
    else {
      this.removeNode(this.root, node);
    }
  }

  removeNode(root, node) {
    if(root.value > node.value) {
      if(root.left.value === node.value) {
        root.left = null;
      }
      else {
        this.removeNode(root.left, node);
      }
    }
    else {
      if(root.right.value === node.value) {
        root.right = null;
      }
      else {
        this.removeNode(root.right, node);
      }
    }
  }

}

module.exports = Tree;