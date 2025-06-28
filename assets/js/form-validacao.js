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

    let media = calcularMedia();
    let statusMedia = "";
    if(media >= 6.0){
        statusMedia = "Aprovado";
    }else{
        statusMedia = "Reprovado";
    }

    let textarea = document.querySelector("#campo-alunos");
    // variavel = variavel + conteudo novo
    // let texto = "Abacate";
    // texto = texto + "Pera";
    textarea.value =  textarea.value + "Nome: " + nome +
    "\nSobrenome: " + sobrenome +
    "\nIdade: " + idade +
    "\nClasse: " + classe +
    "\nModalidade: " + modalidade +
    "\nEstrangeiro: " + estrangeiro + 
    "\nMedia: " + media + 
    "\nSituação: " + statusMedia +
    "\n----------------------------------------------\n";

    alert("cadastro realizado com sucesso!")


    /* Ex. 1 Criar uma pagina com os seguinte campos:
    - ter label para cada um dos campos:
     - campo texto nome do produto;
     - campo numero quantidade;
     - campo number preço unitario com step 0.01;
     - botão cadastrar que chama a função onclick "registrar()";
       - deve pegar os dados dos campos e apresentar no console.log;
    Parte dois:
        - Criar span de total do produto após a div de preço unitario
        - Criar uma função para calcular o total do produto, com o nome "calcularTotalproduto()"
        - Retornar o preço do produto
        - Modificar a função de registrar para chamar a função calcularTotalProduto() armazenando em uma variavel
        - Apresentar o total junto no console
       
    Criar o script assets/js/exercicio01.js
        Criar a função registrar();
            - Pegar o campo do nome do produto por id;
            - Pegar o valor do campo do nome do produto;
            - Apresentar o nome do produto;
            - Fazer o mesmo com os d+ campos;

    
    Ex. 2 Criar uma pagina (paginas/exercicios02-reclamacao.html) com os seguintes campos:
        - campo nome do reclamante;
        - campo e-mail;
        - campo reclamação (textarea);
        - Botão de enviar;
        - Text area de reclamações registradas;
    Criar o script (assets/js/exercicio02-reclamacao.js);
        - Pegar os dados dos campos e colocar na textarea de reclamações;
       */
  
}

function calcularMedia(){
    let inputNota1 = document.querySelector("#campo-nota1");
    let nota1 = parseFloat(inputNota1.value);
    let inputNota2 = document.querySelector("#campo-nota2");
    let nota2 = parseFloat(inputNota2.value);
    let inputNota3 = document.querySelector("#campo-nota3");
    let nota3 = parseFloat(inputNota3.value);
    let inputNota4 = document.querySelector("#campo-nota4");
    let nota4 = parseFloat(inputNota4.value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

function preencherCampoMedia(){
    let spanMedia = document.querySelector("#media-valor");
    let media = calcularMedia();

    if(isNaN(media) === true){
        //return sem nada depois não faz o método ser com retorno, simplemente encerra a execução deste método
        return;
    }

    let mediaFormatada = media.toLocaleString('pt-BR', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    });
    spanMedia.innerHTML = media;
}