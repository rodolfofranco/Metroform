$(document).ready(function() {
    // all custom jQuery will go here

    let urlE = "https://metroform-aleguerrero.c9users.io/usuarioActivo";
    let urlReporte= "https://metroform-aleguerrero.c9users.io/getReporte";


        $('#promedios').append( '<div class="container"><div class="row" id="row"></div></div>' );    
        
        $.getJSON(urlE,function(data){
            $.getJSON(urlReporte,function(reporte){
                    if(data.scope=="Profesor" && data.jefe==false){
                        if(reporte.promA==0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom"> <br>Promedio Autoevaluación <br> No has realizado la autoevaluación'+
                            '</article></div>');    
                        }
                        if(reporte.promA!=0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom"> <br> <br>Promedio Autoevaluacón <br>'+reporte.promA+' / 5<p>Este promedio indica el desempeño del Docente bajo su propia perspectiva.</p</article></div>');    
                        }
                        if(reporte.promB==0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom">  <br>Promedio Evaluación Estudiantes <br> Tus alumnos no te han evaluado'+
                            '</article></div>');    
                        }
                        if(reporte.promB!=0 && reporte.promJefe!=0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom"> <br> <br>Promedio Evaluación Estudiantes <br>'+reporte.promB+' / 4<p>Este promedio indica el desempeño del Docente bajo la perspectiva de sus alumnos.</p></article></div>');    
                        }
                        if(reporte.promJefe==0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom">  <br>Promedio Evaluación Jefe <br> Tu jefe no te ha evaluado!'+
                            '</article></div>');    
                        }
                        if(reporte.promJefe!=0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom"> <br> <br>Promedio Evaluación Jefe <br>'+reporte.promJefe+' / 5<p>Este promedio indica el desempeño del Docente bajo la perspectiva del Jefe de Departamento al que pertenece.</p></article></div>');    
                        }
                        if(reporte.promAJefe==0){
                            $('#row').append('<div class="col-sm-3 text-center"><article class="prom"> <br>Promedio Evaluación <br> No puedes ver este promedio hasta que el jefe te evalúe y te hayas autoevaluado!'+
                            '</article></div>');    
                        }
                        if(reporte.promAJefe!=0 && reporte.promJefe!=0){
                            $('#row').append('<div class="col-sm-3 text-center "><article class="prom"> <br> <br>Promedio entre la autoevaluación y la evaluaión del jefe <br>'+reporte.promAJefe+'<p>Este es el promedio entre la autoevaluacion del Docente y la evaluacion que le hizo el Jefe de Departamento.</p></article></div>');    
                        }

                    }
                    if(data.scope=="Profesor" && data.jefe==true){
                        if(reporte.promA==0){
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom">  <br>Promedio Autoevaluación <br> No has realizado tu autoevaluación'+
                            '</article></div>');    
                        }
                        if(reporte.promA!=0){
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom"> <br> <br>Promedio Autoevaluacón <br>'+reporte.promA+' / 5<p>Este promedio indica el desempeño del Docente bajo su propia perspectiva.</p></article></div>');    
                        }
                        if(reporte.promB==0){
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom">  <br>Promedio Evaluación Estudiantes <br> Tus alumnos no te han evaluado'+
                            '</article></div>');    
                        }
                        if(reporte.promB!=0){
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom"> <br> <br>Promedio Evaluación Estudiantes <br>'+reporte.promB+' / 4<p>Este promedio indica el desempeño del Docente bajo la perspectiva de sus alumnos.</p></article></div>');    
                        }
                        if(reporte.promB==0 || reporte.promA==0){
                            let promedio = reporte.promA*0.5+reporte.promB*0.4;
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom"> <br>Promedio <br>Todavía no puedes ver este promedio</article></div>');    
                        }

                        if(reporte.promB!=0 && reporte.promA!=0){
                            let promedio = reporte.promA*0.5+reporte.promB*0.4;
                            $('#row').append('<div class="col-sm-4 text-center"><article class="prom"> <br> <br>Promedio <br>'+promedio+'<p>Este es el promedio entre los dos tipos de evaluaciones A y B de Autoevaluacion y Evaluacion Estudiantil respectivamente.</p></article></div>');    
                        }

                    }
                    
            });
        });
    
});