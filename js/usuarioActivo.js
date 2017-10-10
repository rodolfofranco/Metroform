$(document).ready(function() {
    // all custom jQuery will go here

    let urlE = "https://metroform-aleguerrero.c9users.io/usuarioActivo";
    let urlJefes= "https://metroform-aleguerrero.c9users.io/getJefes";
    let urlDocentes = "https://metroform-aleguerrero.c9users.io/getDocentes";
    
        
        $.getJSON(urlE,function(data){
            $.getJSON(urlDocentes,function(docente){
                $.getJSON(urlJefes,function(jefe){
                    if(data.scope!="admin"){
                        $('#perfil').append(data.nombre);
                        $('#nombre').append('<p class="perfil">'+data.nombre+'</p>');
                        $('#carnet').append('<p class="perfil">'+data.carnet+'</p>');
                        $('#cedula').append('<p class="perfil">'+data.cedula+'</p>');
                        $('#correo').append('<p class="perfil">'+data.correo+'</p>');
                        $('#rol').append('<p class="perfil">'+data.scope+'</p>');    
                    }
                    

                    
                    if(data.scope=="admin"){
                        $('#perfil').append('Admin');
                        $('#nombre').append('<p class="perfil">Admin</p>');
                        $('#car').remove();
                        $('#ced').remove();
                        $('#correo').append('<p class="perfil">admin@admin.com</p>');
                        $('#rol').append('<p class="perfil">Admin</p>');    
                    }
                    
                    $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none"href="/Home"><i class="material-icons">home</i>    Inicio</a>');
                    if(data.scope=="Estudiante"){
                        $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none" href="/EncuestaB">'+
                        '<i class="material-icons">description</i>Encuesta</a>')    
                    }
                    if(data.scope=="Estudiante"){
                        $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none" href="/Inscripcion">'+
                        '<i class="material-icons">control_point</i>Inscripcion</a>')    
                    }
                    if(data.scope=="Profesor"){
                        $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none" href="/EncuestaA">'+
                        '<i class="material-icons">description</i>Encuesta</a>')    
                    }
                    if(data.scope=="Profesor"){
                        $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration: none" href="/Reporte"><i class="material-icons">info_outline</i>    Reporte</a>')    
                    }
                    $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none"href="/Docentes"><i class="material-icons">list</i>   Secciones</a>');
                    $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none" href="/Usuario">'+
                    '<i class="icon material-icons" id="iconAccount" style="text-allign:right; font-size: 30px">account_circle</i>Perfil</a>');
                    if(data.scope=="admin"){
                        $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration: none" href="/Modificaciones"><i class="material-icons">info_outline</i>    Modificaciones</a>')    
                    }
                    $('#menu').append('<a class="mdl-navigation__link links" style="text-decoration:none"href="/logout"><i class="material-icons">exit_to_app</i>    Salir</a>');
                    
                    //BOTONES DE INICIO
                    
                    if(data.scope=="Estudiante"){
                        $('#menu2').append('<a href="/EncuestaB" class="col-sm-3"  style="text-decoration:none">'+
                                                '<div class="bot2" style="text-decoration:none">REALIZA LA ENCUESTA!</div>'+
                                            '</a>'+
                                          '<a href="/Inscripcion" class="col-sm-3" style="text-decoration:none">'+
                                                '<div class="bot2" style="text-decoration:none">INSCRIBE TUS MATERIAS!</div>'+
                                          '</a>'+
                                          '<a href="/Docentes" class="col-sm-3" style="text-decoration:none">'+
                                                '<div class="bot2" style="text-decoration:none">MIRA LAS SECCIONES!</div>'+
                                          '</a>'+
                                          '<a href="/Usuario" class="col-sm-3" style="text-decoration:none">'+
                                                '<div class="bot2" style="text-decoration:none">RETIRA LAS MATERIAS!</div>'+
                                          '</a>');
                        
                    }
                    if(data.scope=="Profesor"){
                        $('#menu2').append('<a href="/EncuestaA" class="col-sm-4"  style="text-decoration:none">'+
                                                '<div class="bot" style="text-decoration:none">REALIZAR LA ENCUESTA!</div>'+
                                            '</a>'+
                                          '<a href="/Reporte" class="col-sm-4" style="text-decoration:none">'+
                                                '<div class="bot" style="text-decoration:none">PIDE TU REPORTE!</div>'+
                                          '</a>'+
                                          '<a href="/Docentes" class="col-sm-4" style="text-decoration:none">'+
                                                '<div class="bot" style="text-decoration:none">MIRA LAS SECCIONES!</div>'+
                                          '</a>');
                        
                    }
                    
                    
                    
            
                });
            });
        });
    
});