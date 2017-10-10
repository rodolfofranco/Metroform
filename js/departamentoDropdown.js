$(document).ready(function() {
    // all custom jQuery will go here
    
    let urlE = "https://metroform-aleguerrero.c9users.io/getDepartamentos";
    let urlM = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
    let urlS = "https://metroform-aleguerrero.c9users.io/getSeccionesIns";
        
        $.getJSON(urlE,function(data){
            $.getJSON(urlM,function(res){
                $.getJSON(urlS,function(sec){
                    
                
            
            $('#dept').empty('<option>');
            
                $.each(data, function(index, element) {
                                $('#dept').append('<option '+'value='+element.id+'>'+ element.Nombre + '</option>');
                    });
                    
                 let e = document.getElementById("dept");
                 
                 
                $('#dept').click(function(){
                $('#sec').empty('<tr>');
                let idDept = e.options[e.selectedIndex].value;
                $('#mat').empty('<tr>');
                $.each(res,function(index,element2){
                   if(element2.DepartamentoId == idDept){
                       $('#mat').append('<tr data-id="'+element2.id+'"><th scope="row">'+element2.id+'</th><td>'+element2.Nombre+'</td></tr>');
                        } 
                    });
                    
                      $('.table > tbody > tr').click(function() {
                    // Mostrar secciones cuando se clickee la materia
                      var id = $(this).data('id');
                      $('#sec').empty('<tr>');
                           $.each(sec,function(index,e){
                               
                               if(id == e.MateriumId){
                                   $('#sec').append('<tr><th scope="row">'+e.Num_seccion+'</th><td>'+e.Modalidad+'</td><td>'+e.Capacidad+'</td></tr>');
                               }
                               
                               ;
                           }); 
                           
                        
                    
                        });
                    });
                
                
                });
    
               

            });
        });
    
});