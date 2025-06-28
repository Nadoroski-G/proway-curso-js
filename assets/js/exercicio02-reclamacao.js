function enviarReclamacao(){
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;
    let inputEmail = document.querySelector("#campo-email");
    let email = inputEmail.value;
    let inputAssunto =  document.querySelector("#campo-assunto");
    let assunto = inputAssunto.value;
    let inputReclamacao = document.querySelector("#campo-reclamacao");
    let reclamacao = inputReclamacao.value;
    let inputReclamacoes = document.querySelector("#campo-reclamacoes");
    inputReclamacoes.value = inputReclamacoes.value + "Nome: " + nome +
    "\nEmail: " + email +
    "\nAssunto: " + assunto +
    "\nReclamacao: " + reclamacao + 
    "\n-----------------------------------------\n";
}