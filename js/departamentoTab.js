$(document).ready(function() {
    // all custom jQuery will go here
    
    let urlD = "https://metroform-aleguerrero.c9users.io/getDepartamentos";
        
        $.getJSON(urlD,function(data){
            
            $('#dept').empty('<tr>');
                $.each(data, function(index, element) {
                        $('#dept').append('<tr> <td class="mdl-data-table__cell--non-numeric">'+element.Nombre+'</td></tr>');   
                    });
                    
            });
           
                    
                    
});