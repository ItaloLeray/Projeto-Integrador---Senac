const fila = ["Pedro", "Ana", "João"];
let tamanhoFila = fila.length;

let i = 1
do {

    console.log("Fila de clientes: " + fila);

    console.log("Atendendo o primeiro cliente...");
    
    function atendeCliente(cliente){
        console.log('Atendendo cliente: ' +cliente)
    }
    atendeCliente(fila[0]);
    fila.shift();
    
    function lerFila(fila) {
        console.log('Fila atual: ' +fila);
        if (fila.length == 0) {
            console.log('Lista vazia');
        
        } else {
            
        }
    }
    lerFila(fila);
    i++;
} while (i <= tamanhoFila);


function adicionarCliente() {
    let nomeCliente = prompt('Digite o nome do cliente: ');
    if (nomeCliente) {
        fila.push(nomeCliente)
    }
}

function atenderCliente() {
    if (fila.length > 0) {
        let clienteAtendido = fila.shift();
        alert('Atendendo o cliente ' +clienteAtendido);
    } else {
        alert('Fila vazia!')
    }
}
//Outro jeito de fazer

//    console.log("Fila atual: " +fila)
//    
//while (fila.length > 0) {
//        console.log('Atendendo cliente: ' +fila[0])
//        fila.shift;
//    }

//    console.log('Fim da fila')