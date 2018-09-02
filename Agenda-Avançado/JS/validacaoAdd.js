function validacaoAdd(nota,data,hora){
	if(nota.lenght != 0 && hora.lenght != 0 && data.lenght != 0){
		// valida se as datas ja passaram ou se são antigas
		var validacao = validacaoDatas(data,hora);
		// a variavel validacao deve retornar true se as datas estão validas, se não deve retornar false
		if (validacao == true) {
			return true;
		}else{
			alert('Datas invalidas, por favor digite uma data que aind esta por vir!')
			document.querySelector('#add_time').value = '';
			document.querySelector('#add_data').value = '';
		}
	}else{
		alert('Dados em falta,por favor preencha todos os campos');
		document.querySelector('#add_nota').value = '';
		document.querySelector('#add_time').value = '';
		document.querySelector('#add_data').value = '';
	}
}