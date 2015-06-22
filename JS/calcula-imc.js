 var botao =  document.getElementById("calcula-imcs");
 botao.addEventListener("click",function(){
		//Captura todos os elementos do arquivo.HTML qu contem a class paciente; 
		var tdsPaciente = document.getElementsByClassName("paciente");

		function montaPaciente(trDoPaciente){
			var nome = trDoPaciente.getElementsByClassName("info-nome")[0].textContent;
			var altura = trDoPaciente.getElementsByClassName("info-altura")[0].textContent;
			var peso = trDoPaciente.getElementsByClassName("info-peso")[0].textContent;
			var paciente = {
				nome : nome,
				altura: altura,
				peso : peso,
				pegaImc : function(){
					return peso/(altura*altura);
				}
			}
			return paciente;
		}

		percorreArray(tdsPaciente , function(pacienteTD){
			var pacientes = montaPaciente(pacienteTD);
			var imcTD = pacienteTD.getElementsByClassName("info-imc")[0]; //captura TD para ser alterado
			var imc = pacientes.pegaImc();
			imcTD.textContent = imc;
			console.log(imc);	
		});	
	} 
);