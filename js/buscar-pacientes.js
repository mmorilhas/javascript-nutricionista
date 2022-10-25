var btnBuscar = document.querySelector("#buscar-pacientes")

btnBuscar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/paci11entes");

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText; // console.log(typeof resposta);
            var pacientes = JSON.parse(resposta); // transforma a string em um Array de objetos | console.log(typeof pacientes);

            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });

        }  else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }


    });

    xhr.send();
    
})