function validacaoDatas(data_validar, hora_validar){
	//vamos validar se as datas são antigas

	//variavel de comparação de hora atual
	var data_atual = new Date();
	//variaveis de comparação da hora marcada
	var hora = Number(hora_validar.split(':')[0])
	var minutos = Number(hora_validar.split(':')[1])
	var dia = Number(data_validar.split('-')[2])
	var mes = Number(data_validar.split('-')[1])
	var ano = Number(data_validar.split('-')[0])

	if ((data_atual.getHours() - hora < 1) && (minutos - data_atual.getMinutes() < 1 ) ) {
		if ( (ano >= data_atual.getFullYear() ) && ( ( mes >= (data_atual.getMonth()+1) ) || (dia > data_atual.getDate()) ) ) {
			//datas estão certas
			return true;
		}else{
			return false;
		}
	}else if( (ano >= data_atual.getFullYear() ) &&  ( mes >= (data_atual.getMonth()+1) ) && (dia >= data_atual.getDate()) ){
		return true
	}else{
		return false;
	}
	
}