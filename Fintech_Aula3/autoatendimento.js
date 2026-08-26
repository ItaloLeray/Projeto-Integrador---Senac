const diaDoMes = () => new Date().getDate();
console.log(diaDoMes());

const horaDoDia = () => new Date().getHours();
console.log(horaDoDia());

const minutoDoDia = () => new Date().getMinutes();
console.log(minutoDoDia());

const saudacao = () => {
    const hora = horaDoDia();
    if (hora < 12) {
        return "Bom dia!";
    } else if (hora < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
};

console.log(saudacao());

document.getElementById("saudacao").textContent = saudacao();