

    var controlAcces = function (queue, event) {
        if (!queue) {
          return null;
        }
        let lista = new Queue
        let descarte = [];
        let listaFinal = [];
      
      
        var i = 0
        while(i<queue.size() + i){
      
          if (queue.array[0]['age'] > 18 && queue.array[0]['ticket']['event'] === event) {
            lista.enqueue(queue.dequeue(queue.array[0]));
          } else {
            queue.dequeue(queue.array[0])
      
        }  i++
        }
            
          let len = lista.size();
          if(len === 1){
            queue.enqueue(lista.array[0]['fullname']);
              return listaFinal;
          } else if( len > 1){
      
        for (var j = 0; j < 1; j++) {
          for (var h = lista.size() - 1; h > 0; h--) {
      
            if (lista.array[j]['ticket']['number'] === lista.array[h]['ticket']['number']) {
              queue.enqueue(lista.array[j]['fullname']);
            } else { queue.enqueue(lista.array[h]['fullname']); }
          }
        }
        return queue;
      }
      }