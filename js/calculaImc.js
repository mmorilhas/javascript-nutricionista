var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++ ){
 
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);  // true ou false

    if(!pesoValido){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoValido = false;
        
    }

    if(!alturaValida){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaValida = false;
    }

    if(pesoValido && alturaValida){

        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;

    } else{
        paciente.classList.add("paciente-invalido");
    }
    
}

function validaPeso(peso){
    if(peso >=0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
    
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

titulo.addEventListener("click", function(){
    
    console.log("função anonima deu certo")
});

