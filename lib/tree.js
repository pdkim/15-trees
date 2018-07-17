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
  //add to right
  //   if(node.value > currRoot.value && currRoot.right === null) {
  //     currRoot.right = node;
  //   }
  //   else if(node.value > currRoot.value) {
  //     currRoot = currRoot.right;
  //     console.log('currRoot right is ', currRoot.value);
  //     this.add(currRoot);
  //   }
  //   //add to left
  //   else if(node.value < currRoot.value && currRoot.left !== null) {
  //     currRoot = currRoot.left;
  //     console.log('currRoot is ', currRoot.value);
  //     this.add(currRoot);
  //   }
  //   else if(node.value < currRoot.value && currRoot.left === null) {
  //     currRoot.left = node;
  //   }
  // }

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
        root.right === node;
      }
      else{
        this.addNode(root.right);
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

    let currRoot = this.root;
    let preRoot = null;

    if(!currRoot) {
      return 'Invalid request.';
    }


  }

}

module.exports = Tree;