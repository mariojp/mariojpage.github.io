

function bomdia(){
		alert('Bom dia!!!');
		var h1v = document.querySelector("h1");
		h1v.textContent = "UCSAL";
}


function botaoEvento(botao) {
	var senha = document.querySelector("#inputPassword");

	if(senha.value.length < 6){
		alert('Senha precisa ser maior que 6');	
	}
	alert('Botão clicado');
	botao.submit();

}
