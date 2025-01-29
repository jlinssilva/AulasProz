let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

let qtdProduto = document.getElementById("quantidade-produto-01");
let btnAdicionar = document.getElementById("btn-adicionar-produto-01");
let btnSubtrair = document.getElementById("btn-subtrair-produto-01")

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  //quantidadeSubtotal.textContent = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);
  //valorSubtotal.textContent = (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);
}

atualizarSubtotal();

/*
function adicionarProd(){
  qtdProduto.value = Number(qtdProduto.value) + 1; // atualiza o input
  subtotalInfo.quantidade = Number(qtdProduto.value); //atualiza a quantidade do objeto SubtotalInfo
  atualizarSubtotal();
}

function subtrairProd(){
  qtdProduto.value = Number(qtdProduto.value) - 1; // atualiza o input
  subtotalInfo.quantidade = Number(qtdProduto.value); //atualiza a quantidade do objeto SubtotalInfo
  atualizarSubtotal();
}
*/

function atualizarValores(){
  qtdProduto.value = Number(qtdProduto.value);
  subtotalInfo.quantidade = Number(qtdProduto.value);
  atualizarSubtotal();
}

qtdProduto.addEventListener("change",atualizarValores);
//btnAdicionar.addEventListener("click",adicionarProd);
//btnSubtrair.addEventListener("click",subtrairProd);