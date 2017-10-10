var validateJefe = false;
$(document).ready(function() {
    
        let urlE = "https://metroform-aleguerrero.c9users.io/usuarioActivo";
        let urlDocentes = "https://metroform-aleguerrero.c9users.io/getDocentes";
        let urlS = "https://metroform-aleguerrero.c9users.io/getSeccionesIns";
        let urlDpto = "https://metroform-aleguerrero.c9users.io/getDepartamentos";
        let urlRA = "https://metroform-aleguerrero.c9users.io/RespuestaA";

    $.getJSON(urlDocentes,function(docente){ 
            $.getJSON(urlS,function(seccion){ 
                $.getJSON(urlDpto,function(departamento){
                    $.getJSON(urlE,function(usuario){ 
                        $.getJSON(urlRA, function(respuestaA){
                            
                        //Se comprueba si ya fue auto evaluado y si fue evaluado por otro docente    
                       let aux = 0;
                       
                       
                       
                       $.each(respuestaA, function(index, element) {
                           if(element.DocenteId == usuario.id && element.Jefe == 0){
                               aux++;
                           }
                       });
                //Cuando el usuario actual es JEFE
                if(usuario.jefe==true){
                    //Se cargan todas las secciones del departamento (las del mismo jefe incluidas)
                    $('#sec').append('<option disabled>JEFE</option>');
                    if(aux <51){
                       $('#sec').append('<option id="auto" name="auto">Auto-Evaluación</option>'); 
                    }
                    
                   
                   $.each(docente,function(index, element) {
                     let aux1 = 0;
                     $.each(respuestaA,function(index, element1) {
                         
                         if(element1.DocenteId == element.id && element1.Jefe == 1){
                             aux1++;
                         }
                     });
                         if(aux1<51){
                          if(element.DepartamentoId == usuario.departamentoId && element.id != usuario.id ){
                            $('#sec').append('<option value='+element.id+' id="'+element.id+'" name="docente">'+element.id+'.- '+element.Nombre+' -- Carnet: '+element.Carnet+'</option>'); 
                         }   
                         }
                          
                          
                     
                       
                   });
                   /*
                    $.each(materia,function(index,element){
                            $.each(seccion,function(index,element2){
                                //Se buscan las secciones que correspondan a materias del departamento
                                if(element.id == element2.MateriumId){
                                    $('#sec').append('<option value='+element2.id+'>'+'Seccion: '+element2.Num_seccion+'    '+element.Nombre+' - '+element.Codigo+'</option>')
                                }
                            });
                    });
                    */
                }
                else{
                    //Se cargan las secciones que dicta el docente
                    $('#sec').append('<option disabled>NO JEFE</option>');
                    
                     if(aux <51){
                       $('#sec').append('<option id="auto" name="auto">Auto-Evaluación</option>'); 
                    }
                  
                    
                }
                    
    $('#sec').change(function(){
        $('.mdl-button').prop("disabled",false);
    });
                
    
                

    $("#boton").click(function(){
        document.getElementById('mostrar').style.display = "inline-block";
        let urlD = "https://metroform-aleguerrero.c9users.io/getEncuestaA";
     


        var aux=1;
        
        
        
    
        $.getJSON(urlD,function(data){
            
            
            $('#encuestaA').empty('<tr>');
                $.each(data, function(index, element) {
                    $('#encuestaA').append('<tr> <td class="mdl-data-table__cell--non-numeric">'+element.Enunciado+ '</td>'+
                        '<td>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="opcion-'+aux+'">'+
                                '<input type="radio" id="opcion-'+aux+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">1</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="opcion-'+aux+1+'">'+
                                '<input type="radio" id="opcion-'+aux+1+'" class="mdl-radio__button" name="'+element.id+'" value="2">'+
                                '<span class="mdl-radio__label">2</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="opcion-'+aux+2+'">'+
                                '<input type="radio" id="opcion-'+aux+2+'" class="mdl-radio__button" name="'+element.id+'" value="3">'+
                                '<span class="mdl-radio__label">3</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="opcion-'+aux+3+'">'+
                                '<input type="radio" id="opcion-'+aux+3+'" class="mdl-radio__button" name="'+element.id+'" value="4">'+
                                '<span class="mdl-radio__label">4</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="opcion-'+aux+4+'">'+
                                '<input type="radio" id="opcion-'+aux+4+'" class="mdl-radio__button" name="'+element.id+'" value="5">'+
                                '<span class="mdl-radio__label">5</span>'+
                            '</label>'+
                        '</td>'+
                    '</tr>');   
                        aux=aux+5;
                    });
                    //boton
                    $('#enviar').append('<button id="env" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> enviar'+
                    '</button>');
            });
            
        });
        
        
        $('form').submit(function(e){
            
            var n = $("tr").length;
            var count=0;
            alert(n);
            
                
                $(':input[type=radio]:checked').each(function(){
                    count++;
                    });
                    
                
            
            
            
            if(count == n){
                alert('Ha seleccionado todas las respuestas!');
                
                }
                else{
                alert(count);
                alert('Falta seleccionar respuestas!');
                //Se cancela el POST
                e.preventDefault();
                
                }
            
            
            
            });
        
                    });
            });
        });
    });
    });
    
});