$(document).ready(function(){
    
        let urlM = "https://metroform-aleguerrero.c9users.io/mostrarMateria";
        let urlS = "https://metroform-aleguerrero.c9users.io/estudiantesInscritos";
        let urlD = "https://metroform-aleguerrero.c9users.io/getDocentes";
        let infoUsuario = "https://metroform-aleguerrero.c9users.io/usuarioActivo";
        let urlSecciones = "https://metroform-aleguerrero.c9users.io/getSeccionesIns";
        let urlRA = "https://metroform-aleguerrero.c9users.io/RespuestaA";
        let urlDe = "https://metroform-aleguerrero.c9users.io/getDepartamentos";
    
        $.getJSON(urlM,function(materia){
            $.getJSON(urlS,function(seccion){
                $.getJSON(urlD,function(docente){
                    $.getJSON(infoUsuario,function(user){
                        $.getJSON(urlSecciones,function(res){
                            $.getJSON(urlRA, function(respa){
                                $.getJSON(urlDe,function(departamento){
                                    
                                
                            
                       
                        
                        if(user.scope == "Estudiante"){
                            
                            document.getElementById('est').style.display = "inline-block";
                            $('#titulo').append('<h2>Materias Inscritas</h2>');
                            $('#titulo2').append('<h2>Retirar Materias</h2>');
                            $('#enviar').append('<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> RETIRAR'+
                    '</button>');
                            //Estructura de la tabla
                                                $('#tablaUsuario').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">Materia</th>'+
                                                '<th>Seccion</th>'+'<th class="mdl-data-table__cell--non-numeric">Docente</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Evaluo</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Retiro</th>'+
                                                '</tr>'
                                                ); 
                                                
                            // Se llena la tabla con las materias , secciones y los docentes que le dan clase a el usuario
                        $.each(seccion,function(index,element){
                            if(element.EstudianteId == user.id){
                                //El estudiante activo esta inscrito en una seccion
                                $.each(res,function(index,element2){
                                    
                                    if(element.SeccionId == element2.id){
                                    // Se encuentra la seccion donde esta inscrito el estudiante
                                    $.each(docente,function(index,element3){
                                        $.each(materia,function(index,element4){
                                        // Si el id de la materia y el id del docente coincide con los de la seccion
                                            if(element3.id == element2.DocenteId && element4.id == element2.MateriumId){
if(element.Retiro==0){
    $('#materia').append('<option name="seccion" value="'+element.SeccionId+'">'+element4.Nombre+' --- Seccion: '+element2.Num_seccion+'-'+element3.Nombre+'</option>');                                                        
}

                                            if(element.Evaluo==0 && element.Retiro==0){
                                                //Contenido de la tabla
                                                $('#matUsuario').append('<tr>'+
                                                '<td class="mdl-data-table__cell--non-numeric">'+element4.Nombre+'</td>'+
                                                '<td>'+element2.Num_seccion+'</td>'+
                                                '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                                '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                '</tr>');
                                                } 
                                            else if(element.Evaluo==1 && element.Retiro==0){
                                                    $('#matUsuario').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element4.Nombre+'</td>'+
                                              '<td>'+element2.Num_seccion+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i class="material-icons">done</i></td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                              '</tr>');
                                            }
                                            else if(element.Evaluo==0 && element.Retiro==1){
                                                    $('#matUsuario').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element4.Nombre+'</td>'+
                                              '<td>'+element2.Num_seccion+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i class="material-icons">clear</i></td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                              '</tr>');
                                            }
                                            else if(element.Evaluo==1 && element.Retiro==1){
                                                    $('#matUsuario').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element4.Nombre+'</td>'+
                                              '<td>'+element2.Num_seccion+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i class="material-icons">done</i></td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                              '</tr>');
                                            }
                                            }
            
                                            
                                        })
                                    })

                                    }
                                })
                            }
                        });
                    
                            
                        }
                        else if(user.scope == "Profesor"){
                            
                            if(user.jefe == true){
                                
                                 $('#titulo').append('<h3>Materias Dictadas</h3>');
                            $('#titulo2').append('<h2>Estado Docente</h2>');
                            $('#titulo3').append('<h2>Docentes Departamento</h2>');
                            //Es profesor , mostrar las secciones que dicta
                             $('#tablaDocente').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">Autoevaluado</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Evaluado por Jefe</th>'+
                                                '</tr>'
                                                ); 
                                                
                                let aux = 0;
                                let aux1 = 0;
 
                                        $.each(respa,function(index, element4) {
                                            if(element4.DocenteId == user.id && element4.Jefe == 0){
                                                aux++;
                                            }else if(element4.DocenteId == user.id && element4.Jefe == 1){
                                                aux1++;
                                            }
                                        });
                                        //Este if lo que valida es que la seccion pertenezca al docente que esta loggeado
                                        
                                            //Aqui falta validar si ha sido evaluado o autoevaluado
                                            //PERO que es lo que haces aqui??? osea para que 
                                            
                                            
                                            if(aux < 51 && aux1 < 51){
                                             $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '</tr>');   
                                            }else if(aux >= 51 && aux1 < 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '</tr>');
                                            }else if(aux >= 51 && aux1 >= 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '</tr>');
                                            }else if(aux < 51 && aux1 >= 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '</tr>');
                                            }
                                             
                                        
                                        
                                
                                
                                                
                                                
                            //Estructura de la tabla
                            $('#tablaUsuario').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">Materia</th>'+
                                                '<th>Seccion</th>'+'<th class="mdl-data-table__cell--non-numeric">Modalidad</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Capacidad Alumnos</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Nº Encuestas Respondidas</th>'+
                                                '</tr>'
                                                );  
                            
                            
                            
                            
                               $.each(materia,function(index,element3){
                                    $.each(res,function(index,element2){
                                        let evaluaciones = 0;
                                        $.each(seccion,function(index, element4) {
                                            if(user.id == element2.DocenteId && element2.id == element4.SeccionId && element4.Evaluo == 1){
                                                evaluaciones++;
                                            }
                                        });
                                        //Este if lo que valida es que la seccion pertenezca al docente que esta loggeado
                                        if(user.id == element2.DocenteId && element3.id == element2.MateriumId){
                                            //Aqui falta validar si ha sido evaluado o autoevaluado
                                            //PERO que es lo que haces aqui??? osea para que 
                                        
                                               $('#matUsuario').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                              '<td>'+element2.Num_seccion+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element2.Modalidad+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element2.Capacidad+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+evaluaciones+'</td>'+
                                              '</tr>');
                                            
                                             
                                        }
                                        
                                    });
                                });
                            
                                
                                //Estructura de la tabla
                            $('#tablaJefe').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">ID</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Docente</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Evaluado</th>'+
                                                '</tr>'
                                                ); 
                                
                                
                                $.each(docente,function(index, element4) {
                                   
                                        
                                         if(element4.DepartamentoId == user.departamentoId && element4.id != user.id){
                                       
                                      
                                let aux1 = 0;
 
                                        $.each(respa,function(index, element5) {
                                           if(element5.DocenteId == element4.id && element5.Jefe == 1){
                                                aux1++;
                                            }
                                        });
                                      
                                      if(aux1 <51){
                                          $('#matJefe').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element4.id+'</td>'+
                                              '<td>'+element4.Nombre+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                              '</tr>'); 
                                      }else if(aux1>=51){
                                           $('#matJefe').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element4.id+'</td>'+
                                              '<td>'+element4.Nombre+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                              '</tr>');
                                      }
                                       
                                    }
                                    
                                    
                                   
                                    
                                });
                                
                            }else{
                                 $('#titulo').append('<h3>Materias Dictadas</h3>');
                            $('#titulo2').append('<h2>Estado Docente</h2>');
                            //Es profesor , mostrar las secciones que dicta
                             $('#tablaDocente').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">Autoevaluado</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Evaluado por Jefe</th>'+
                                                '</tr>'
                                                ); 
                                                
                                let aux = 0;
                                let aux1 = 0;
 
                                        $.each(respa,function(index, element4) {
                                            if(element4.DocenteId == user.id && element4.Jefe == 0){
                                                aux++;
                                            }else if(element4.DocenteId == user.id && element4.Jefe == 1){
                                                aux1++;
                                            }
                                        });
                                        //Este if lo que valida es que la seccion pertenezca al docente que esta loggeado
                                        
                                            //Aqui falta validar si ha sido evaluado o autoevaluado
                                            //PERO que es lo que haces aqui??? osea para que 
                                            
                                            
                                            if(aux < 51 && aux1 < 51){
                                             $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '</tr>');   
                                            }else if(aux >= 51 && aux1 < 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '</tr>');
                                            }else if(aux >= 51 && aux1 >= 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '</tr>');
                                            }else if(aux < 51 && aux1 >= 51){
                                                $('#matDocente').append('<tr>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">clear</i></td>'+
                                                  '<td class="mdl-data-table__cell--non-numeric"><i id="error" class="material-icons">done</i></td>'+
                                                  '</tr>');
                                            }
                                             
                                        
                                        
                                
                                
                                                
                                                
                            //Estructura de la tabla
                            $('#tablaUsuario').append(
                                                '<tr>'+'<th class="mdl-data-table__cell--non-numeric">Materia</th>'+
                                                '<th>Seccion</th>'+'<th class="mdl-data-table__cell--non-numeric">Modalidad</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Capacidad Alumnos</th>'+
                                                '<th class="mdl-data-table__cell--non-numeric">Nº Encuestas Respondidas</th>'+
                                                '</tr>'
                                                );  
                            
                              
                            
                               $.each(materia,function(index,element3){
                                    $.each(res,function(index,element2){
                                        let evaluaciones = 0;
                            
                                        $.each(seccion,function(index, element4) {
                                            if(user.id == element2.DocenteId && element2.id == element4.SeccionId && element4.Evaluo == 1){
                                                evaluaciones++;
                                            }
                                        });
                                        //Este if lo que valida es que la seccion pertenezca al docente que esta loggeado
                                        if(user.id == element2.DocenteId && element3.id == element2.MateriumId){
                                            //Aqui falta validar si ha sido evaluado o autoevaluado
                                            //PERO que es lo que haces aqui??? osea para que 
                                        
                                               $('#matUsuario').append('<tr>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element3.Nombre+'</td>'+
                                              '<td>'+element2.Num_seccion+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element2.Modalidad+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+element2.Capacidad+'</td>'+
                                              '<td class="mdl-data-table__cell--non-numeric">'+evaluaciones+'</td>'+
                                              '</tr>');
                                            
                                             
                                        }
                                        
                                    });
                                });
                            
                            }
                            
                            
                           
                            
                            
                        }
                        else{
                            //Es admin
                        }
                        
                            });
                            });
                        });
                        
                    });
                });
            });
        });
});