
var senhas = [
  "Senha1",
  "senhanova",
  "MinhaSenhaForte!",
  "12345678",
  "SENHA_FORTE",
  "senha#123"
];

function senhaForte(senhas) {
  var saida = '<ul>'
  for (var i = 0; i < senhas.length; i++) {
    var senha = senhas[i];
    var resposta = 'senha fraca, tente novamente';

    if (senha.length < 7) {
      resposta = 'senha fraca, tente novamente';
    } else if (!/[!@#$%^&*()_+{}:<li>?]/.test(senha)) {
      resposta = 'senha fraca, tente novamente';
    } else if (!/[a-z]/.test(senha)) {
      resposta = 'senha fraca, tente novamente';
    } else if (!/[A-Z]/.test(senha)) {
      resposta = 'senha fraca, tente novamente';
    } else {
      resposta = 'parabéns, senha forte';
    }

    saida += `<li>senha: ${senha} -  ${resposta}</li>`
  }
  saida += '</ul>'
  document.write(saida)
}

senhaForte(senhas);


