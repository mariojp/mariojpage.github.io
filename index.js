

function bomdia(){
		alert('Bom dia!!!');
		var h1v = document.querySelector("h1");
		h1v.textContent = "UCSAL";
}


function botaoEvento() {
	var senha = document.querySelector("#inputPassword");
	var form = document.querySelector("#formulario");
	alert('Botão clicado');

	if(senha.value.length < 6){
		alert('Senha precisa ser maior que 6');	
	}else{
		form.submit();
	}

}
