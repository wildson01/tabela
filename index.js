
var nome = prompt("informe seu nome");
var peso = parseInt(prompt("informe seu peso"));
var altura = parseFloat(prompt("informe sua altura"));

    var QTDagua = parseFloat(peso*35);
    var Litros = parseFloat(QTDagua/1000);

document.write(`${nome} Com ${peso} QUILOS, VOCE PRECISA TOMAR ${QTDagua} ml de agua por dia que equivale a ${Litros} litros`);       
