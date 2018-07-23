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

  it('add a node to the right branch if the desired value is greater than the root value', () => {
    
    let tree = new Tree;
    tree.add(12);
    expect(tree.root.value).toBe(12);

    tree.add(18);
    expect(tree.root.right.value).toBe(18);

    tree.add(24);
    expect(tree.root.right.right.value).toBe(24);
  });

  //remove
  it('remove the last node from on the left side', () => {

    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(3);
    tree.add(15);
    tree.remove(3);

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.left.left).toBeNull();
  });


  it('remove the last node from the right side', () => {
    
    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(20);
    tree.remove(20);

    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.right).toBeNull();
  });

  //find
  it('be able to find a specified node within the tree', () => {

    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(15);

    expect(tree.find(tree.root, 5)).toBe(5);
    expect(tree.find(tree.root, 15)).toBe(15);
  });

  //serialize
  it('convert data into stringified form', () => {
    let tree = new Tree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    let results = [];
    let expected = '10, 5, null, null, 15, null, null';

    expect(tree.serialize(tree.root, results)).toEqual(expected);
  });

  //deserialize
  it('convert a string into a data tree', () => {
    
    let tree = Tree.deserialize([10, 5, null, null, 15, null, null]);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);

  });

  
});