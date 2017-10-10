$(document).ready(function() {
    // all custom jQuery will go here
    
    let urlEncuestaB = "https://metroform-aleguerrero.c9users.io/getEncuestaB";
    let urlEncuestaA = "https://metroform-aleguerrero.c9users.io/getEncuestaA";
    let urlDepartamento = "https://metroform-aleguerrero.c9users.io/getDepartamentos";
    let urlJefes = "https://metroform-aleguerrero.c9users.io/getJefes";
    let urlDocentes = "https://metroform-aleguerrero.c9users.io/getDocentes";
    let urlSecciones = "https://metroform-aleguerrero.c9users.io/getSeccionesIns";
    let urlMateria = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
    
  
        
    $.getJSON(urlDepartamento,function(departamento){
        $.getJSON(urlEncuestaB,function(encuestaB){
            $.getJSON(urlEncuestaA,function(encuestaA){
                $.getJSON(urlJefes,function(chief){
                    $.getJSON(urlDocentes,function(docente){
                        $.getJSON(urlSecciones, function(secciones){
                          $.getJSON(urlMateria, function(materias){
                                
                
                    $('#evaluacionB').click(function(){
                        document.getElementById('prof').style.display = "none";
                        document.getElementById('cargos').style.display = "none";
                        document.getElementById('componenteA').style.display = "none";
                        document.getElementById('seccion').style.display = "none";
                        document.getElementById('componenteB').style.display = "block";
                        
                        $('#enunciadoB').empty('<option>');
                        $('#enunciadoB').append('<option selected="selected" disabled>Seleccione el Enunciado a actualizar o eliminar (Evaluacion B)</option>');
                        $.each(encuestaB, function(index, element) {
                            $('#enunciadoB').append('<option '+'value='+element.id+'>'+element.Enunciado + '</option>');
                        });        
                    });
                    
                        document.getElementById('componenteA').style.display = "block";
                        document.getElementById('componenteB').style.display = "none";
                        document.getElementById('prof').style.display = "none";
                        document.getElementById('cargos').style.display = "none";
                        document.getElementById('seccion').style.display = "none";
                        $('#enunciadoA').empty('<option>');
                        $('#enunciadoA').append('<option selected="selected" disabled>Seleccione el Enunciado a actualizar o eliminar (Evaluacion A)</option>');
                        $.each(encuestaA, function(index, epale) {
                            $('#enunciadoA').append('<option '+'value="'+epale.id+'">'+epale.Enunciado + '</option>');
                        });        
    
                    $('#evaluacionA').click(function(){
                        document.getElementById('prof').style.display = "none";
                        document.getElementById('cargos').style.display = "none";
                        document.getElementById('componenteB').style.display = "none";
                        document.getElementById('seccion').style.display = "none";
                        document.getElementById('componenteA').style.display = "block";
                        $('#enunciadoA').empty('<option>');
                        $('#enunciadoA').append('<option selected="selected" disabled>Seleccione el Enunciado a actualizar o eliminar (Evaluacion A)</option>');
                        $.each(encuestaA, function(index, epale) {
                            $('#enunciadoA').append('<option '+'value="'+epale.id+'">'+epale.Enunciado + '</option>');
                        });        
                    });
                    
                    $('#modificarProf').click(function(){
                        document.getElementById('cargos').style.display = "none";
                        document.getElementById('componenteA').style.display = "none";
                        document.getElementById('componenteB').style.display = "none";
                        document.getElementById('seccion').style.display = "none";
                        document.getElementById('prof').style.display = "block";
                        $('#dept').append('<option selected="selected" disabled>Seleccione el Departamento</option>');
                        $.each(departamento, function(index, depart) {
                            $('#dept').append('<option '+'value='+depart.id+'>'+depart.Nombre + '</option>');
                        });       
                    });
                    
                    
                    $('#asignarCargos').click(function(){
                        document.getElementById('componenteA').style.display = "none";
                        document.getElementById('componenteB').style.display = "none";
                        document.getElementById('prof').style.display = "none";
                        document.getElementById('seccion').style.display = "none";
                        document.getElementById('cargos').style.display = "block";
                        $('#docentes').empty('<option>');
                        $('#depart').empty('<option>');
                        $('#depart').append('<option selected="selected" disabled>Seleccione el Departamento</option>');
                        $.each(departamento, function(index, depart) {
                            $('#depart').append('<option '+'value='+depart.id+'>'+depart.Nombre + '</option>');
                        });
                        $('#docentes').append('<option selected="selected" disabled>Seleccione el Docente</option>');
                        
                        let e = document.getElementById("depart");
                        $('#depart').click(function(){
                        let idDept = e.options[e.selectedIndex].value;
                        $('#docentes').empty('<option>');
                        $('#docentes').append('<option selected="selected" disabled>Seleccione el Docente</option>');
                            $.each(docente, function(index, doc) {
                                if(doc.DepartamentoId == idDept){
                                            $('#docentes').append('<option '+'value='+doc.id+'>'+ doc.Nombre + '</option>');
                                    }
                                });
                        });
                    });
                    
                    
                    $('#asignarSeccion').click(function(){
                        document.getElementById('componenteA').style.display = "none";
                        document.getElementById('componenteB').style.display = "none";
                        document.getElementById('prof').style.display = "none";
                        document.getElementById('cargos').style.display = "none";
                        document.getElementById('seccion').style.display = "block";
                        $('#docentess').empty('<option>');
                        $('#departa').empty('<option>');
                        $('#seccions').empty('<option>');
                        
                        $('#departa').append('<option selected="selected" disabled>Seleccione el Departamento</option>');
                        $.each(departamento, function(index, depart) {
                            $('#departa').append('<option '+'value='+depart.id+'>'+depart.Nombre + '</option>');
                        });
                        $('#docentess').append('<option selected="selected" disabled>Seleccione el Docente</option>');
                        
                        let e = document.getElementById("departa");
                        $('#departa').click(function(){
                        let idDept = e.options[e.selectedIndex].value;
                        $('#docentess').empty('<option>');
                        $('#docentess').append('<option selected="selected" disabled>Seleccione el Docente</option>');
                            $.each(docente, function(index, doc) {
                                if(doc.DepartamentoId == idDept){
                                            $('#docentess').append('<option '+'value='+doc.id+'>'+ doc.Nombre + '</option>');
                                    }
                                });
                                
                              $('#seccions').empty('<option>');
                              $('#seccions').append('<option selected="selected" disabled>Seleccione la Materia</option>');
                               
                                 $.each(materias, function(index, mat) {
                                     if(mat.DepartamentoId == idDept){
                                         $('#seccions').append('<option value='+mat.id+'>'+mat.Nombre+'</option>');
                                     }
                                 });
                                
                        });
                        
                        
                    });
                      });
                  }); 
                });    
            });
        });
    });
    });
    
});