function autenticar() {
    const login = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if(login === 'usuario' && senha === '1234AB'){
        document.getElementById('mensagem').innerHTML="Usuário autenticado com sucesso!"
    }
    else{
        document.getElementById('mensagem').innerHTML="Acesso negado!"
    }
}