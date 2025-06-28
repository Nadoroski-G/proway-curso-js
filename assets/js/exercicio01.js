var logRegistro;

function Registrar(){
    let inputNome = document.querySelector("#campo-produto");
    let nome = inputNome.value;
    let inputQuantidade = document.querySelector("#campo-quantidade");
    let quantidade = parseInt(inputQuantidade.value);
    let inputPreco = document.querySelector("#campo-preco");
    let preco = parseFloat(inputPreco.value);
    let textarea = document.querySelector("#campo-registro");
    let total = calcularTotalProduto();
    if(nome === "" && isNaN(quantidade) && isNaN(preco)){
        alert("Por favor inserir nome, quantidade e preço do produto.")
    }else{
    textarea.value = textarea.value + "Produto: " + nome +
    "\nQuantidade: " + quantidade +
    "\nPreço unitario: R$" + preco +
    "\nPreço total: R$" + total +
    "\n----------------------------------------\n";

    logRegistro = textarea.value;

    console.log("Produto: " + nome +
    "\nQuantidade: " + quantidade +
    "\nPreço unitario: R$" + preco +
    "\nPreço total: R$" + total +
    "\n----------------------------------------\n");

    alert("Cadastro de produto realizado com sucesso!");
    }
}

function Limpar(){
    let inputNome = document.querySelector("#campo-produto");
    inputNome.value = "";
    let inputQuantidade = document.querySelector("#campo-quantidade");
    inputQuantidade.value = "";
    let inputPreco = document.querySelector("#campo-preco");
    inputPreco.value = "";
}

function Zerar(){
    let textarea = document.querySelector("#campo-registro");
    textarea.value = "";
}

function mostrarCadastros(){
    let textarea = document.querySelector("#campo-registro");
    textarea.value = logRegistro;
}

function calcularTotalProduto(){
    let inputQuantidade = document.querySelector("#campo-quantidade");
    let quantidade = parseInt(inputQuantidade.value);
    let inputPreco = document.querySelector("#campo-preco");
    let preco = parseFloat(inputPreco.value);

    let total = quantidade * preco;
    return total;
}

function preencherTotalProduto(){
    let spanTotal = document.querySelector("#total-parcial");
    let total = calcularTotalProduto();

    if(isNaN(total) === true){
        //return sem nada depois não faz o método ser com retorno, simplemente encerra a execução deste método
        return;
    }

    let totalFormatado = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    });
    spanTotal.innerHTML = total;
}