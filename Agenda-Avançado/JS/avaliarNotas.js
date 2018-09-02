//verificar todas as datas
//import 'criar-anotacao.js'; 
//print(lista_objetos)
console.log('teste3')
function avaliarNotass(lista_objetos){
	var data = new Date();
	if(lista_objetos.length == 0){
		console.log('Vazio')
	}else{	
		for( i in lista_objetos){
			if ( (lista_objetos[i].hora - dataAgr.getHours() == 1 ) && ( lista_objetos[i].minuto == dataAgr.getMinutes() ) && ( lista_objetos[i].ano == dataAgr.getFullYear() ) && ( lista_objetos[i].mes == (dataAgr.getMonth()+1) ) && ( lista_objetos[i].dia == dataAgr.getDate() ) ){
				alert("Mensagem de Alerta\nNota: "+anotacao[i]+"\nHorario: "+lista_objetos[i].hora+":"+lista_objetos[i].minuto+"Dia: Hoje\nTempo: Daqui a uma hora");
				lista_objetos[i].status = false;
			}		
		}
	}

}
