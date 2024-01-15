function geraralerta() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var nascimento = document.getElementById('nascimento').value;
    var campodeestudo = document.getElementById('campodeestudo').value;

    var dados = nome + '\n' + sobrenome + '\n' + nascimento + '\n' + campodeestudo;

    alert(dados);
}
