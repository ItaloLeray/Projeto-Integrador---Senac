const clientes = ["Lúcia","Joana","Ivo","Adriana"];
for(item of clientes){
    console.log("Cliente: " +item);
}
console.log("Adicionando cliente...")
clientes.push("Lucas");
for(sujeito of clientes){
    console.log("Cliente: " +sujeito);
}