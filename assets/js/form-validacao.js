// limpar_campos => Snake Case
// limparCampos => Camel Case
// LimparCampos => Pascal Case
// limpar-campos => Kebab Case


// Padrão de nomenclatura para função e variavel em JS sempre será Camel Case
function limparCampos() {
    let inputNome = document.querySelector("#campo-nome");
    // Definir o valor do campo como uma string vazia, ou seja, limpar o campo
    inputNome.value = "";
    let inputSobrenome = document.querySelector("#campo-sobrenome");
    inputSobrenome.value = "";
    let inputIdade = document.querySelector("#campo-idade");
    inputIdade.value = "";
    let selectClasse = document.querySelector("#campo-classe");
    selectClasse.value = "";
    let inputModalidade = document.querySelector("input[name='modalidade']:checked");
    // Necessario validar que o usuario escolheu alguma modalidade, caso contrario a limpeza não funcionará para os demais campos seguintes
    if (inputModalidade !== null) {
            inputModalidade.checked = false;
    }

    let inputEstrangeiro = document.querySelector("#campo-estrangeiro");
    inputEstrangeiro.checked = false;
}

function cadastrar() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;
    let inputSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = inputSobrenome.value;
    let inputIdade = document.querySelector("#campo-idade");
    let idade = inputIdade.value;
    let selectClasse = document.querySelector("#campo-classe");
    let classe = selectClasse.value;
    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    if (campoModalidade === null) {
            alert("Escolha a modalidade!")
            return;
    }

    let modalidade = campoModalidade.value;

    let campoEstrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoEstrangeiro.checked;
    if(estrangeiro === true){
        estrangeiro = "Sim";
    }else{
        estrangeiro = "Não";
    }


    alert("\nNome: " + nome +
    "\nSobrenome: " + sobrenome +
    "\nIdade: " + idade +
    "\nClasse: " + classe +
    "\nModalidade: " + modalidade +
    "\nEstrangeiro: " + estrangeiro);
}