// function para que serve?? contém um trecho de código que tem o objetivo de resolver algum problema
function realizarSoma() {
    // Pegar o campo "input" que contem o id="campo-numero1"
    let inputNumero1 = document.querySelector("#campo-numero1");
    // pegar o valor(número digitado) do campo numero 1
    let numero1 = parseInt(inputNumero1.value);
    // Pegar o campo "input" que contem o id="campo-numero2"
    let inputNumero2 = document.querySelector("#campo-numero2");
    // pegar o valor(número digitado) do campo numero 2
    let numero2 = parseInt(inputNumero2.value);

    alert("Soma: " + (numero1 + numero2));

    /*let inputNumero1 = document.querySelector("#campo-numero1");
    let numero1 = parseInt(inputNumero1.value);
    console.log(inputNumero1)
    console.log(typeof(numero1))


    let inputNumero2 = document.querySelector("#campo-numero2")
    console.log(inputNumero2)

    // O que o usuario digita vem como String

    // Se eu quero fazer algum calculo eu preciso converter o valor
    let numero2 = parseInt(inputNumero2.value);
    console.log(typeof(numero2))
    
    alert("Soma: " + (numero1 + numero2));
}

function apresentarVariaveis() {
    let nome = "Gabriel";
    let sobrenome = "Rezende";
    let idade = 27;
    let salario = 5085.50;
    let empregado = false;

    // comentario em linha
    /* Comentario em bloco, porque pode conter varias linhas */
    /* 
        Tipos de dados:
            string = armazena texto
            int = inteiro
            float = numeros reais
            boolena = verdadeiro ou falso

   let aumento = 15.00;
   salario = salario + aumento;
   alert("Nome: " + nome + "\nSalario: " + salario);*/
}

function apresentarIdade() {
    let dataNascimento = new Date(1997, 10, 7);
    let anoNascimento = dataNascimento.getFullYear();

    let dataHoraAtual = new Date();
    let anoAtual = dataHoraAtual.getFullYear();

    // Calcular idade
    let idade = anoAtual - anoNascimento;

    console.log("Idade: " + idade);

    if(idade < 18) {
        console.log("Menor de idade")
    }else{
        console.log("Maior de idade")
    }


}