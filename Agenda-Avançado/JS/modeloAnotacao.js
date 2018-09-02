function notas(){
			this.anotacao = null;
			this.hora = null;
			this.minuto = null;
			this.dia = null;
			this.mes = null;
			this.ano = null;
			//caso a data da notas ainda esta por vir true, caso não false
			this.status = null//depois esse objeto deve ser retornado para a função validacaoDatas atraves de um array
}			
			
// criando um array onde vai ficar todos os obejtos para depois acessa-los para verificação das datas e horas armazenadas
var lista_objetos = [];	