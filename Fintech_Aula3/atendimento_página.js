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