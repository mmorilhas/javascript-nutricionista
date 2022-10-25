var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500);

     
    /*   OU 
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR do paciente 

    paiDoAlvo.remove();
    */

});

/* ----não funciona pois os pacientes novos não vão escutar a função 
    já que o js vai ser lido quando a página carregar ----

var pacientes = document.querySelectorAll(".paciente");  
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });

})
*/