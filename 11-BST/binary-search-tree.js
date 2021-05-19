class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {
    // escribe un metodo que inserte un nodo al final
    if (value > this.value) {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (value < this.value) {
        if (!this.left) {
          this.left = new Node(value)
        } else {
          this.left.insert(value);
        }
      }
    }
  }




  find(value) {
    if (value === this.value) {
      return this.value;
    } else {
      if (value <= this.value && this.left !== null) {
        return this.left.find(value);
      }
      else if (value >= this.value && this.right !== null) {
        return this.right.find(value)
      } else {
        return undefined;
      }

    }
  }

  size() {
    // escribe un metodo que determine el largo del arbol
    if (!this.left && !this.right) {
      return 1;
    }

    if (!this.left && this.right) {
      return 1 + this.right.size();
    }

    if (!this.right && this.left) {
      return 1 + this.left.size();
    }
    else {
      return 1 + this.right.size() + this.left.size()
    }
  }


  breadthFirstForEach(cb, queue) {
    // escribe el metodo breadthFirstForEach
    if (!queue) queue = [];

    if (this.left) queue.push(this.left);
    if (this.right) queue.push(this.right);

    if (queue.length > 0)
      queue.shift().breadthFirstForEach(cb, queue)

  }

  depthFirstForEach(cb, arg) {
    switch (arg) {

      case 'pre-order':
        cb(this.value);
        if (this.left) this.left.depthFirstForEach(cb, arg);
        if (this.right) this.right.depthFirstForEach(cb, arg);
        return;

      case 'post-order':
        if (this.left) this.left.depthFirstForEach(cb, arg);
        if (this.right) this.right.depthFirstForEach(cb, arg);
        cb(this.value);
        return;

      case 'in-order':
      default:
        if (this.left) this.left.depthFirstForEach(cb, arg);
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb, arg);
        return;

    }

  }

}
