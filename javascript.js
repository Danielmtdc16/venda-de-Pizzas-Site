'use strict';

let somaMussarela = 0;
let somaCalabresa = 0;
let somaPortuguesa =0;
let valorTotalM = 0.00;
let valorTotalC = 0.00;
let valorTotalP = 0.00;
let total = 0.00;

let btnVendas = document.getElementById("vendas");
let btnEstorno = document.getElementById("estorno");
let btnPlanilha = document.getElementById("export");

//eventos
btnVendas.addEventListener("click", venda,false);
btnEstorno.addEventListener("click", estorno,false);
btnPlanilha.addEventListener("click", planilha,false);

function venda(e){
    if (document.getElementById("mussarela").checked) {

        somaMussarela += 1;
        valorTotalM += 25.00;
        total += 25.00;
        document.getElementById("quantidadeMussarela").innerHTML = somaMussarela;
        document.getElementById("resultadoMussarela").innerHTML = valorTotalM.toFixed(2);
        document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);


    } else if (document.getElementById("calabresa").checked){

        somaCalabresa += 1;
        valorTotalC += 25.00;
        total += 25.00;
        document.getElementById("quantidadeCalabresa").innerHTML = somaCalabresa;
        document.getElementById("resultadoCalabresa").innerHTML = valorTotalC.toFixed(2);
        document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);

    } else if (document.getElementById("portuguesa").checked){

        somaPortuguesa += 1;
        valorTotalP += 25.00;
        total += 25.00;
        document.getElementById("quantidadePortuguesa").innerHTML = somaPortuguesa;
        document.getElementById("resultadoPortuguesa").innerHTML = valorTotalP.toFixed(2);
        document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);

    }

}

function estorno(g){
    if (document.getElementById("mussarela").checked) {
        if (somaMussarela > 0){
            somaMussarela -= 1;
            valorTotalM -= 25.00;
            total -= 25.00;
            document.getElementById("quantidadeMussarela").innerHTML = somaMussarela;
            document.getElementById("resultadoMussarela").innerHTML = valorTotalM.toFixed(2);
            document.getElementById("total").innerHTML = "R$ " + total;
    }

    } else if (document.getElementById("calabresa").checked){
        if (somaCalabresa > 0){
            somaCalabresa -= 1;
            valorTotalC -= 25.00;
            total -= 25.00;
            document.getElementById("quantidadeCalabresa").innerHTML = somaCalabresa;
            document.getElementById("resultadoCalabresa").innerHTML = valorTotalC.toFixed(2);
            document.getElementById("total").innerHTML = "R$ " + total;
        }

    } else if (document.getElementById("portuguesa").checked){
        if (somaPortuguesa > 0){
            somaPortuguesa -= 1;
            valorTotalP -= 25.00;
            total -= 25.00;
            document.getElementById("quantidadePortuguesa").innerHTML = somaPortuguesa;
            document.getElementById("resultadoPortuguesa").innerHTML = valorTotalP.toFixed(2);
            document.getElementById("total").innerHTML = "R$ " + total;
        }
    }
}