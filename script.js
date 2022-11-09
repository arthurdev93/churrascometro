//      REGRA DE NEGÓCIO
// Carne - 400g por pessoa + de 6 horas = 650g
// Cerveja - 1200ml por pessoa + de 6 horas = 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas = 1500 ml
// Crianças valem por 0.5

//função ENTRAR CARD abaixo, com disparo de evento lá no HTML
function card() {
    let c = document.getElementsByClassName("container")[0];
    c.style.opacity = "0.935";
}
//função SAIR CARD
function cardOf() {
    let c = document.getElementsByClassName("container")[0];
    c.style.opacity = "0.7";
}

//FUNÇÃO calculos abaixo
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value; 
    
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja / 1000}l de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas / 1000}l de Refrigerante/Água</p>`

}

function carnePP(duracao) {
    let carne = 400;
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    } 
}

function cervejaPP(duracao) {
    let carne = 400;
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }  
}

function bebidasPP(duracao) {
    let carne = 400;
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }  
}