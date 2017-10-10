$(document).ready(function() {
    
    // all custom jQuery will go here
    
    let urlM = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
    let urlD = "https://metroform-aleguerrero.c9users.io/getDocentes";
    let urlS = "https://metroform-aleguerrero.c9users.io/getSecciones";
        
        //funcion para cargar el dropdown
        $.getJSON(urlM,function(data){
            $.getJSON(urlS,function(data1){
                $.getJSON(urlD,function(data2){
                    
                
                 $('#opcion').append('<option>');
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

    
    //funcion para cargar la encuesta
    $("#boton").click(function(){
        document.getElementById('mostrar').style.display = "inline-block";
        let urlD = "https://metroform-aleguerrero.c9users.io/getEncuestaB";
        var aux=1;
    
        $.getJSON(urlD,function(data){
            
            $('#encuestaB').empty('<tr>');
                $.each(data, function(index, element) {
                    $('#encuestaB').append('<tr> <td class="mdl-data-table__cell--non-numeric">'+element.Enunciado+ '</td>'+
                        '<td>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="'+aux+'">'+
                                '<input type="radio" id="'+aux+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">1</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="'+aux+1+'">'+
                                '<input type="radio" id="'+aux+1+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">2</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="'+aux+2+'">'+
                                '<input type="radio" id="'+aux+2+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">3</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="'+aux+3+'">'+
                                '<input type="radio" id="'+aux+3+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">4</span>'+
                            '</label>'+
                            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="'+aux+4+'">'+
                                '<input type="radio" id="'+aux+4+'" class="mdl-radio__button" name="'+element.id+'" value="1">'+
                                '<span class="mdl-radio__label">5</span>'+
                            '</label>'+
                        '</td>'+
                    '</tr>');   
                        aux=aux+5;
                    });
                    
                    //boton
                    $('#enviar').append('<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> button'+
                    '</button>');
                        
        
            });
    });
    
    
    
    
});