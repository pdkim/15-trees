'use strict';

const Tree = require('../lib/tree.js');

describe('Tree module should', () => {

  //add
  it('add a node to the left branch if the desired value is less than the root value', () => {

    let tree = new Tree;
    tree.add(12);
    expect(tree.root.value).toBe(12);

    tree.add(6);
    expect(tree.root.left.value).toBe(6);

    tree.add(3);
    expect(tree.root.left.left.value).toBe(3);
  });

  xit('add a node to the right branch if the desired value is greater than the root value', () => {
    
    let tree = new Tree;
    tree.add(12);
    expect(tree.root.value).toBe(12);

    tree.add(18);
    expect(tree.right.value).toBe(18);

    tree.add(24);
    console.log('tree second right is ', tree);
    expect(tree.root.right.right.value).toBe(24);
  });

  //remove
  xit('remove a specified node in the tree', () => {
    expect(undefined).toBeUndefined();
  });

  //find
  xit('be able to find a specified node within the tree', () => {

    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(15);

    expect(tree.find(5).value).toBe(5);
    expect(tree.find(15).value).toBe(15);
  });

  //serialize
  xit('convert data into stringified form', () => {
    expect(undefined).toBeUndefined();
  });

  //deserialize
  xit('convert a string into a data tree', () => {
    expect(undefined).toBeUndefined();
  });

  
});