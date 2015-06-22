
function percorreArray(pacientes , comportamento){
	var pacienteTD ;
	for(var posicaoAtual = 0; posicaoAtual < pacientes.length; posicaoAtual++){
		pacienteTD = pacientes[posicaoAtual];
		comportamento(pacienteTD);
	} 
}