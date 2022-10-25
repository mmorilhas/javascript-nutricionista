var btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-add");
    var paciente = obtemDadosDoFormulario(form);   //extraindo informações do form
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){  //erro é somente semantico aqui 
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })

}


function obtemDadosDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}


function montarTr (paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));


    return pacienteTr;

}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    } 

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco");
    }
        
   
    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco")
    }

    return erros;
    
}