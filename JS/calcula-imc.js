
function calcularIMC(){
		//Captura todos os elementos do arquivo.HTML qu contem a class paciente; 
		var tdsPaciente = document.getElementsByClassName("paciente");
		
		for(var posicaoAtual = 0; posicaoAtual < tdsPaciente.length; posicaoAtual++){
			var pacienteTD = tdsPaciente[posicaoAtual];
			
			// pega os trs do pacienteAtual , em seguida captura os dados do cliente (.textContent)
			var nomeP = pacienteTD.getElementsByClassName("info-nome")[0].textContent;
			var pesoP = pacienteTD.getElementsByClassName("info-peso")[0].textContent;
			var alturaP = pacienteTD.getElementsByClassName("info-altura")[0].textContent;
			var imcTD = pacienteTD.getElementsByClassName("info-imc")[0]; //captura TD para ser alterado
			//Instanciando o Objeto
			var paciente = {nome : nomeP, peso : pesoP , altura : alturaP};
			
			if(paciente.altura != 0){
				var imc = paciente.peso / (paciente.altura * paciente.altura);
				//document.getElementById("imc-"+(posicaoAtual+1)).textContent = imc;
				 imcTD.textContent = imc;
				 console.log(imc);
			}else{
				console("Não posso realizar uma divisão por 0! Verifique a Altura");
			}
		}
}