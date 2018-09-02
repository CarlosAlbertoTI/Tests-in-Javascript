var btn_add = document.querySelector('#enviarDados');
btn_add.addEventListener('click', function(){

	var anotacao = document.querySelector("#add_nota").value;
	var data = document.querySelector("#add_data").value;
	var horas = document.querySelector("#add_time").value;

	if(validacaoAdd(anotacao,data,horas)){
	//quebrando os dados para colocar nos obejtos
		console.log('teste1')
		var hora = horas.split(':')[0] ;
		var minuto = horas.split(':')[1]; 
		var dia = data.split('-')[2];
		var mes = data.split('-')[1];
		var ano = data.split('-')[0];	

		var nota = new notas(); 
			nota.anotacao = anotacao;
			nota.hora = hora;
			nota.minuto = minuto;
			nota.dia = dia;
			nota.mes = mes;
			nota.ano = ano;
			//caso a data da nota ainda esta por vir true, caso não false
			nota.status = true
		
			//depois esse objeto deve ser retornado para a função validacaoDatas atraves de um array
	lista_objetos.push(nota);	
	console.log('teste2')		
	}}

);



