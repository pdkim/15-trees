##Travis: 
[![Build Status](https://travis-ci.com/pdkim/15-trees.svg?branch=pk15)](https://travis-ci.com/pdkim/15-trees)

##Heroku: 
https://pk-lab15-trees.herokuapp.com/

##Github:
https://github.com/codefellows-seattle-javascript-401n5/15-trees

##Feature Tasks:
 Create an application that for stack and queue methods. Stacks should be able to push and pop elements out of a list following the LIFO rules. Queues should have a dequeue and enqueue function that should adhere to the FIFO rules. In addition, queues should have methods to serialize and deserialize data.

###Instructions

1. Clone the repository to your device.
2. In terminal, enter npm i to install all dependencies.
  - If you are creating a new js file, be sure to require the tree.js file.
3. Create a new tree object and use tree.add(value). Your list should have a new root node.
4. Use tree.add(lower than root's value).  You should have a node added to the root's left.
5. Use tree.add(higher than root's value).  You should have a nde added to the root's right.
6. Use tree.find(root's left or right value). You should have the value returned to you.
7. Use tree.remove(root's left or right value).  You should have no left or right now.
8. Add the removed node again and run tree.serialize().  You should have data converted to text form.
9. Run tree.deserialize([10, 5, null, null, 15, null, null]).  Data should be back into a tree.
