function Node(val) {
  
    this.val = val;
    this.next = null;
  }


function SinglyLinkedList() {
    
    this.head = null;
    this.length = 0;
  }


SinglyLinkedList.prototype.push = function (val) {
  // El metodo push nos permite insertar un nuevo valor AL FINAL
  if (!this.head) {
    this.head = new Node(val);
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  } if (!current.next) {
    let nuevoNodo = new Node(val);
    current.next = nuevoNodo;
    this.length = this.length + 1;
  }

}

SinglyLinkedList.prototype.pop = function () {
  // El metodo pop nos permite eliminar un nuevo valor AL FINAL
  if (!this.head) {
    return null;
  } else if (!this.head.next) {
    var popValue = this.head.value;
    this.head = null;
    return popValue;

  } else {
    var current = this.head;
    while (current.next.next) {
      current = current.next
    }

    var valuePop = current.next.value;
    current.next = null;
    this.length = this.length - 1;
    return valuePop;
  }
}



SinglyLinkedList.prototype.shift = function () {
  // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
  if (!this.head) { return null; }


  else if (this.head) {
    var valorAremover = this.head;
    this.head = null;
    this.length = this.length - 1;
    return valorAremover;

  }

  while (this.head.next) {
    var valorAremover = this.head.next;
    this.head = this.head.next.next;
    this.length = this.length - 1
    return valorAremover;
  }

}

SinglyLinkedList.prototype.unshift = function (val) {
  // Esto insertara un nuevo valor AL PRINCIPIO
  var newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.length = this.length + 1;
  return 'Nodo agregado al principio con éxito!'
}

SinglyLinkedList.prototype.get = function (index) {
  // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
  if (!this.head) {
    return null
  } else {
    let lista = [];
    let current = this.head
    while (current.next) {
      lista.push(current)
      current = current.next;
    }

    return lista[index];
  }
}


SinglyLinkedList.prototype.set = function (index, data) {
  // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
  this.get(index).val = data;

  return this.get(index);

}

SinglyLinkedList.prototype.insert = function (index, val) {
  // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
  var nuevoNodo = new Node(val);

  nuevoNodo.next = this.get(index)
  var current = this.head;
  while (current.next) {
    current = current.next
    if (current.next === this.get(index)) {
      current.next = nuevoNodo
    }

  }
  return nuevoNodo;

}

SinglyLinkedList.prototype.remove = function (index) {
  //Esto nos permite eliminar un valor en CUALQUIER parte de la lista


  let current = this.head;
  let removedVal = this.get(index);
  while (current.next) {
    if (current.next === removedVal) {
      current.next = removedVal.next;
      this.length = this.length - 1;
    } else {
      current = current.next;

    }

  }
  return removedVal;

}


SinglyLinkedList.prototype.reverse = function () {

  let current = this.head;
  let prev = null;
  let next = null;

  while (current.next) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  next.next = prev;
  this.head = next;

  return this.head;
}
  // revierte esta lista


