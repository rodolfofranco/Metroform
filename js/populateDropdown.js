$(document).ready(function() {
    // all custom jQuery will go here
    
    let urlM = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
    let urlD = "https://metroform-aleguerrero.c9users.io/getDocentes";
    let urlS = "https://metroform-aleguerrero.c9users.io/getSecciones";
        
        
        $.getJSON(urlM,function(data){
            $.getJSON(urlS,function(data1){
                $.getJSON(urlD,function(data2){
                    
                
                 $('#sec').empty('<option>');
                $.each(data,function(index,element1){
                   $.each(data1, function(index, element) {
                       $.each(data2,function(index, element2){
                           
                       
                       if(element1.id == element.MateriumId && element.DocenteId == element2.id){
                           $('#sec').append('<option '+'value='+element.id+'>'+element1.Nombre+' --- Seccion: '+element.Num_seccion + ' - '+element.Modalidad +' - '+element2.Nombre +'</option>');
                       }
                       });       
                    });
                 
                });
                
                });
                
                
            });
           
        });
        
        /*
        $.getJSON(urlM,function(data){
            $.getJSON(urlD,function(res){
                $.getJSON(urlS,function(obj){
                
            
            $('#dept').empty('<option>');
                $.each(res, function(index, element) {
                                $('#dept').append('<option '+'value='+element.id+'>'+ element.Nombre + '</option>');
                    });
            
            let e = document.getElementById("dept");
            $('#dept').click(function(){
            let idDept = e.options[e.selectedIndex].value;
            $('#mat').empty('<option>');
                $.each(data, function(index, element2) {
                    if(element2.DepartamentoId == idDept){
                                $('#mat').append('<option '+'value='+element2.id+'>'+ element2.Nombre + '</option>');
                        }
                    });
                    
                });
                
                
            let m = document.getElementById("mat")
            $('#mat').click(function(){
            let idMat = m.options[m.selectedIndex].value;
            $('#sec').empty('<option>');
                $.each(obj,function(index,element3){
                    if(idMat == element3.MateriumId){
                        $('#sec').append('<option '+'value='+element3.id+'>'+'Seccion: '+element3.Num_seccion + ' - '+element3.Modalidad + '</option>');
                        }
                    });  
                
                });
                
            
                
            });
        });
    });
    */
});