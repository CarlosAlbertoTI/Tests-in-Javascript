
function relogio(){
	var data = new Date();
		document.getElementById('relogio').style ='line-height:30px;margin-top: 10px;margin-left:80px;left:2px;width: 150px;height: 30px;background-color: #ccc;';
		document.getElementById('relogio').style.fontSize = '20px';
		document.getElementById('relogio').style.padding = '10px';
		document.getElementById('relogio').style.textAlign = 'center';
		document.getElementById('relogio').style.border = '1px solid black';
		//formatação da hora
		
		//HORA
		if(data.getHours() < 10){
			document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds(); 
			
			//MINUTOS
			if(data.getMinutes() < 10){
				document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+'0'+data.getMinutes()+" : "+data.getSeconds();
					
				//SEGUNDOS
				if (data.getSeconds() < 10) {
					document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+'0'+data.getMinutes()+" : "+'0'+data.getSeconds();
				} else {
					document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+'0'+data.getMinutes()+" : "+data.getSeconds();
				}

			} else {
				document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds();

				//SEGUNDOS
				if (data.getSeconds() < 10) {
					document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+data.getMinutes()+" : "+'0'+data.getSeconds();
				} else {
					document.getElementById('relogio').innerHTML = '0'+data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds();
				}
			}

		}else {
			document.getElementById('relogio').innerHTML = data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds(); 
				
			//MINUTOS
			if(data.getMinutes() < 10){
				document.getElementById('relogio').innerHTML = data.getHours()+" : "+'0'+data.getMinutes()+" : "+data.getSeconds();
					
				//SEGUNDOS
				if (data.getSeconds() < 10) {
					document.getElementById('relogio').innerHTML = data.getHours()+" : "+'0'+data.getMinutes()+" : "+'0'+data.getSeconds();
				} else {
					document.getElementById('relogio').innerHTML = data.getHours()+" : "+'0'+data.getMinutes()+" : "+data.getSeconds();
				}

			} else {
				document.getElementById('relogio').innerHTML = data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds();

				//SEGUNDOS
				if (data.getSeconds() < 10) {
					document.getElementById('relogio').innerHTML = data.getHours()+" : "+data.getMinutes()+" : "+'0'+data.getSeconds();
				} else {
					document.getElementById('relogio').innerHTML = data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds();
				}
			}
		}
}	