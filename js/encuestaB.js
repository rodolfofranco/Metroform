$(document).ready(function() {
    
    // all custom jQuery will go here
    
    let urlM = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
    let urlD = "https://metroform-aleguerrero.c9users.io/getDocentes";
    let urlS = "https://metroform-aleguerrero.c9users.io/getSecciones";
    let urlEI = "https://metroform-aleguerrero.c9users.io/estudiantesInscritos";    
    let urlE = "https://metroform-aleguerrero.c9users.io/usuarioActivo";    
        
        //funcion para cargar el dropdown
        $.getJSON(urlM,function(data){
            $.getJSON(urlS,function(data1){
                $.getJSON(urlD,function(data2){
                   $.getJSON(urlEI, function(data3) {
                          
                       
             
                  
                   
                $.each(data,function(index,element1){
                   $.each(data1, function(index, element) {
                       $.each(data2,function(index, element2){
                        $.each(data3, function(index, element3){
                            
                         
                          
                       if(element1.id == element.MateriumId && element.DocenteId == element2.id && element.id == element3.SeccionId && element3.Evaluo == 0 && element3.Retiro ==0){
                          
                                         $('#sec').append('<option name="seccion" '+'value='+element.id+' id='+element.id+'>'+element1.Nombre+' --- Seccion: '+element.Num_seccion + ' - '+element.Modalidad +' - '+element2.Nombre +'</option>');
                                
                       }
                        });     
                    });
                 
                });
                });
                   
                
                $('#sec').change(function(){
                           $('.mdl-button').prop("disabled",false);
                });
                
                      
                
                   });
                   }); 
                });
                
                
            });
           
        

    
    
    $("#boton").click(function(){
        document.getElementById('mostrar').style.display = "inline-block";
        let urlD = "https://metroform-aleguerrero.c9users.io/getEncuestaB";
        var aux=1;
    
        $.getJSON(urlD,function(data){
            
            $('#encuestaB').empty('<tr>');
                $.each(data, function(index, element) {
                    console.log(element.id);
                    $('#encuestaB').append('<tr id ="'+element.id+'" name="Enunciado_'+element.id+'">'+
                    '<td class="mdl-data-table__cell--non-numeric" name="valor1_'+element.id+'" id="valor1_'+element.id+' value="'+element.id+'">'+element.Enunciado+'</td>'+
                        '<td style="display:inline-block">'+
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
                        '</td>'+
                    '</tr>');
                        console.log(aux);
                        aux=aux+4;
                    });
                    
                    //boton
                    $('#enviar').append('<button id="env" ="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> enviar'+
                    '</button>');
        
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
    