'use strict';
var models = require('../models');
const Boom = require('boom');
var Sequelize = require("sequelize")
var sequelize = new Sequelize('c9', 'aleguerrero', '');

        module.exports = [
            
            
    {
      method: 'GET',
      path: '/login',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      },
      handler: function (request, reply) {
        if (request.auth.isAuthenticated) {
          return reply.file('Vistas/Inicio.html');
        }

        reply.file('Vistas/Login.html');
      }
        }
    },
    
    {
        method: 'POST',
        path: '/login',
        config: {
      auth: {
        mode: 'try'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      },
      handler: function(request,reply){
          
        if (request.auth.isAuthenticated) {
          return reply.file('Vistas/Inicio.html');
        }
        
        let username = request.payload.email;
        let password = request.payload.password;

        console.log('Usuario : '+username);
        console.log('Password : '+password);
        
        let Usuario = models.Usuario;
        
        models.sequelize.sync().then(function(){
            
            Usuario.findAndCountAll({where : {Correo : username} }).then(function(res){
                console.log('Hay '+res.count+' cuentas');
                if(res.count==0){
                         
                          reply.file('Vistas/Login.html');
                          
                }
                else{
                    Usuario.findOne({where: {Correo: username,Password: password} }).then(function(res){
                       
                       if(res!=null){
                         let Estudiante = models.Estudiante;
                         let Docente = models.Docente;
                         
                          Estudiante.findOne({where: {Correo: username}}).then(function(obj){
                           
                           Docente.findOne({where: {Correo: username}}).then(function(obj2){
                             
                             
                              if(obj==null && obj2==null){
                                //caso admin
                                let finalAdmin = {
                                    scope: res.scope,
                                    usuario: username
                                   
                                };
                                
                                request.cookieAuth.set(finalAdmin);
                                reply.file('Vistas/Inicio.html');
                              }
                            // caso estudiante
                             else if(obj!=null){
                                let final = {
                                  id: obj.id,
                                  nombre: obj.Nombre,
                                  carnet: obj.Carnet,
                                  cedula: obj.Cedula,
                                  scope: res.scope,
                                  correo: res.Correo,
                                  usuarioId: obj.UsuarioId
                                };
                                request.cookieAuth.set(final);
                                reply.file('Vistas/Inicio.html');
                             }
                             //caso profesor
                          
                             
                             else{
                               
                               models.Departamento.findOne({where: {JefeID : obj2.id}}).then(function(jefe){
                              
                              if(jefe!=null){
                                let final2 = {
                                  id: obj2.id,
                                  nombre: obj2.Nombre,
                                  carnet: obj2.Carnet,
                                  cedula: obj2.Cedula,
                                  scope: res.scope,
                                  correo: res.Correo,
                                  departamentoId: obj2.DepartamentoId,
                                  usuarioId: obj2.UsuarioId,
                                  jefe: true
                                };
                                request.cookieAuth.set(final2);
                                reply.file('Vistas/Inicio.html');
                              }
                              else{
                                let final2 = {
                                  id: obj2.id,
                                  nombre: obj2.Nombre,
                                  carnet: obj2.Carnet,
                                  cedula: obj2.Cedula,
                                  scope: res.scope,
                                  correo: res.Correo,
                                  departamentoId: obj2.DepartamentoId,
                                  usuarioId: obj2.UsuarioId,
                                  jefe: false
                                };
                                request.cookieAuth.set(final2);
                                reply.file('Vistas/Inicio.html');
                              }
                              
                              
                            });
                                
                             }
                             
                             
                              
                           });
                           
                         });
                         
 
                        
                       }
                       else{
                            reply.file('Vistas/Login.html');
                       }
                        
                    });
                }
                
            });
        
        });
        
          
          
      }
    
    }
    },
    
    {
    method: 'GET',
    path: '/logout',
    config: {
      auth: 'session',
      handler: function (request, reply) {
        request.cookieAuth.clear();
        reply.file('Vistas/Login.html');
      }
    }
  },
    
    {
      method: 'GET',
      path: '/SignUp',
       config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      },
      handler:function (request, reply){
            reply.file('Vistas/SignUp.html');
        }
      }
    },
    
    {
      method: 'GET',
      path: '/Error',
      config: {
        auth: {
            mode: 'try',
            strategy: 'session'
        },
        plugins: {
            'hapi-auth-cookie':{
                redirectTo: false
            }
        },
      handler:function (request, reply){
            reply.file('Vistas/Error.html');
        }
      }
    },
    
  
    {
        method: 'POST',
        path: '/SignUp',
         config: {
      auth: {
        mode: 'try'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false
        }
      },
        handler: function(request,reply){
            
            let usuario = {
                correo: request.payload.email,
                password: request.payload.contraseña,
                rol: request.payload.rol,
                nombre: request.payload.nombre,
                carnet: request.payload.carnet,
                cedula: request.payload.cedula,
                departamento: request.payload.departamento,
            };
            
            console.log("Nombre: "+usuario.nombre);
            console.log("Email: "+usuario.correo);
            console.log("Clave: "+usuario.password);
            console.log("Rol: "+usuario.rol);
            console.log("Carnet: "+usuario.carnet);
            
            const modelo = models.Usuario;
            
            // VALIDACIO  NUEVA //
            modelo.findAndCountAll({ where: ["Correo = ?", usuario.correo] }).then(function(cantidad){
                console.log('Cantidad (correo): '+cantidad.count);
                if(cantidad.count<1){
                  
                  const estudiante = models.Estudiante;
                  const profesor = models.Docente;
                
                  models.sequelize.sync().then(function(){
                    
                    estudiante.findAndCountAll({ where: {Carnet: usuario.carnet} }).then(function(est){ //BUSQUEDA DE CANTIDAD DE ESTUDIANTES
                      console.log('CANTIDAD ESTUDIANTE: '+est.count);
                      
                      estudiante.findAndCountAll({ where: {Cedula: usuario.cedula} }).then(function(ced1){ //BUSQUEDA DE CANTIDAD DE ESTUDIANTES
                        console.log('CANTIDAD ESTUDIANTE (cedula): '+ced1.count);
                      
                        profesor.findAndCountAll({ where: {Carnet: usuario.carnet} }).then(function(prof){ //BUSQUEDA DE CANTIDAD DE PROFESORES
                          console.log('CANTIDAD PROFESOR: '+prof.count);
                          
                          profesor.findAndCountAll({ where: {Cedula: usuario.cedula} }).then(function(ced2){ //BUSQYEDA DE CANTIDAD DE PROFESORES
                            console.log('CANTIDAD PROFESOR (cedula): '+ced2.count);
                            
                            if(est.count<1 && prof.count<1 && ced1.count<1 && ced2.count<1){ // SI NO HAY PROFESORES NI ESTUDIANTES REGISTRADOS EN SUS TABLAS
                              models.sequelize.sync().then(function(){
                                modelo.create({                //CREACION DE USUsARIO
                                  Correo: usuario.correo,
                                  Password: usuario.password,
                                  scope: usuario.rol
                                });
                              });
                              models.sequelize.sync().then(function(){
                                if(usuario.rol == 'Estudiante'){
                                  modelo.findOne({ where: {Correo: usuario.correo} }).then(function(res, err) { //BUSQUEDA DEL ID DEL CORREO
                                    console.log('ID del correo buscado: '+res.id);
                                    
                                    
      sequelize.query('INSERT INTO Estudiantes (Nombre,UsuarioId,Correo,Cedula,Carnet) VALUES (?,?,?,?,?)' , 
        {replacements: [usuario.nombre,res.id,usuario.correo, usuario.cedula, usuario.carnet], type: sequelize.QueryTypes.INSERT }); 
                                    // models.sequelize.sync().then(function(){ 
                                    // estudiante.create({ // INSERCION EN CASO DE SER ESTUDIANTE
                                    //   Nombre: usuario.nombre,
                                    //   Correo: usuario.correo,
                                    //   Cedula: usuario.cedula,
                                    //   Carnet: usuario.carnet,
                                    //   UsuarioId: res.id
                                    // })
                                    // .catch(function(err) {
                                    //   console.log('ERROR ESTUDIANTE');
                                    // });
                                    // });
                                  });
                                  reply.file('Vistas/Login.html');  
                                }
                              });
                              models.sequelize.sync().then(function(){
                                if(usuario.rol == 'Profesor'){
                                  modelo.findOne({ where: {Correo: usuario.correo} }).then(function(res){ //BUSQUEDA DEL ID DEL CORRREO
                                    console.log('ID del correo buscado: '+res.id);
                                    var depart = models.Departamento;
                                    depart.findOne({where: {Nombre: usuario.departamento}}).then(function(res2, err){ //BUSQUEDA DEL DEPARTAMENTO
                                      console.log('ID del departamento buscado: '+res2.id);
                                      models.sequelize.sync().then(function(){
                                        profesor.create({   //CREACION EN CASO DE SER PROFESOR
                                          Nombre: usuario.nombre,
                                          Correo: usuario.correo,
                                          Cedula: usuario.cedula,
                                          Carnet: usuario.carnet,
                                          UsuarioId: res.id,
                                          DepartamentoId: res2.id,
                                        }) //CREATE
                                        .catch(function(err) {
                                          console.log('ERROR PROFESOR');
                                        });
                                      }); // SYNC
                                    }); // DEPART.FINDONE
                                  }); // MODELO.FINDONE 
                                  reply.file('Vistas/Login.html');
                                } //CIERE DEL ELSE  
                              });
                              
                              
    
                            } // CIERRE DEL ELSE
                            else{
                              reply.file('Vistas/Error.html');
                            }
                        });      
                        });
                    });    
                    });
                      
                  });
                  
                }
                else{
                  reply.file('Vistas/Error.html');  
                }
            });    
            
        }
     }
    },
    
    
    
//     User.create({ name: request.body.email })
// .then(function(user) {
//     // you can now access the newly created task via the variable task
//     console.log('success');
// })
// .catch(function(err) {
//     // print the error details
//     console.log(err, request.body.email);
// });
    
   
    {
      method: 'GET',
      path: '/Home',
      config: {
        auth: {
            strategy: 'session',
            scope: ['admin','Estudiante','Profesor']
        },
        handler:function (request, reply){
            reply.file('Vistas/Inicio.html');
            }
      }
    },
    
     {
      method: 'GET',
      path: '/Usuario',
      config: {
        auth: {
            strategy: 'session',
            scope: ['admin','Estudiante','Profesor']
        },
        handler:function (request, reply){
            reply.file('Vistas/Usuario.html');
            }
      }
    },
    {
      method: 'POST',
      path: '/Usuario',
      config: {
        auth: {
            strategy: 'session',
            scope: ['admin','Estudiante','Profesor']
        },
        handler:function (request, reply){
          
          let materia = request.payload.materia;
          
          sequelize.query('UPDATE SeccionEstudiante SET Retiro=1 WHERE EstudianteId='+request.auth.credentials.id+' AND SeccionId='+materia+';');
          
            reply.file('Vistas/Usuario.html');
            }
      }
    },
    
    {
      method: 'GET',
      path: '/Departamentos',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Estudiante','Profesor']
        }
      ,
      handler:function (request, reply){
            reply.file('Vistas/Departamento.html');
        }
      }
    },
    {
      method: 'POST',
      path: '/EncuestaB',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Estudiante']
        }
      ,
      handler:function (request, reply){
  
      let payload = request.payload;
      let idSeccion = request.payload.sec;
      
      for(var i=1; i< Object.keys(payload).length ; i++){
        console.log('SIZE: '+Object.keys(payload).length); // tamano del objeto, debe ser 18 (17 preguntas mas el id de la seccion)
        console.log('PREGUNTA '+i); // numero de la pregunta
        console.log('VALOR: '+payload[i]); //aqui sale el valor de cada respuesta
        
        //Cuando sea la ultima posicion no debe hacer query, sale la seccion porque el payload se jala todo
        if(i!=Object.keys(payload).length){
          
        sequelize.query('INSERT INTO RespuestaB (PreguntaBId,SeccionId,Valor,Inst_Estudiante) VALUES ( '+i+' ,'+idSeccion+', '+payload[i]+', "evalua"  )' , 
        {type: sequelize.QueryTypes.INSERT});
        
        }
        
      }
      //Se cambia el atributo evaluo de el alumno que realiza la encuesta
      sequelize.query('UPDATE SeccionEstudiante SET Evaluo=1 WHERE EstudianteId='+request.auth.credentials.id+' AND SeccionId='+idSeccion+';');
       
     console.log(payload);
     console.log('ID SECCION: '+idSeccion);
     
    reply.file('Vistas/EncuestaB.html');
    


        }
      }
    },
    {
      method: 'GET',
      path: '/getDepartamentos',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Estudiante','Profesor']
        }
      ,
      handler:function (request, reply){
            let Departamentos = models.Departamento;
            Departamentos.findAll().then(function(res){
              reply(res);
            });
        }
      }
    },
    {
      method: 'GET',
      path: '/getEncuestaB',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Estudiante','Profesor']
        }
      ,
      handler:function (request, reply){
            let Pregunta_Bs = models.Pregunta_B;
            Pregunta_Bs.findAll({order:['id']}).then(function(encuesta){
              reply(encuesta);
            });
        }
      }
    },
    {
      method: 'GET',
      path: '/getEncuestaA',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Estudiante','Profesor']
        }
      ,
      handler:function (request, reply){
            let Pregunta_As = models.Pregunta_A;
            Pregunta_As.findAll({order:['id']}).then(function(encuesta){
              reply(encuesta);
            });
        }
      }
    },
    
    
    
    {
      method: 'GET',
      path: '/Estudiantes',
      handler:function (request, reply){
            reply.file('Vistas/Estudiante.html');
      }
    },
    {
      method: 'GET',
      path: '/Docentes',
      handler:function (request, reply){
            reply.file('Vistas/Docente.html');
      }
    },
        {
      method: 'GET',
      path: '/AcercaDe',
       config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
            reply.file('Vistas/AcercaDe.html');
      }
     }
    },
    
    {
      method: 'GET',
      path: '/',
       config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
            reply.file('Vistas/About.html');
      }
     }
    },
    
    {
      method: 'GET',
      path: '/EncuestaA',
      config: {
          auth: {
              strategy: 'session',
              scope: ['Profesor','admin']
          },
      handler:function (request, reply){
            reply.file('Vistas/EncuestaA.html');
        }
      }
    },
    {
      method: 'POST',
      path: '/EncuestaA',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin','Profesor']
        }
      ,
      handler:function (request, reply){
  
      let payload = request.payload;
      let idDocenteAuto = request.auth.credentials.id;
      let idDocente = request.payload.seccion;
      let i;
      
      console.log('ID DOCENTE: '+idDocente);
      
        if(request.auth.credentials.jefe==true){
        
        //Jefe AutoEvaluandose (atributo Jefe vale 0 en la tabla RespuestaA)

        if(idDocente=="Auto-Evaluación"){
          
          
          
        for(i=1; i< Object.keys(payload).length ; i++){
        console.log('SIZE: '+Object.keys(payload).length); // tamano del objeto
        console.log('PREGUNTA '+i); // numero de la pregunta
        console.log('VALOR: '+payload[i]); //aqui sale el valor de cada respuesta
        
              //Cuando sea la ultima posicion no debe hacer query, sale la seccion porque el payload se jala todo
              
              if(i!=Object.keys(payload).length){
          
              sequelize.query('INSERT INTO RespuestaA (DocenteId,PreguntaAId,Jefe,Valor) VALUES( '+idDocenteAuto+' ,'+i+','+0+' , '+payload[i]+' ) ' , 
              {type: sequelize.QueryTypes.INSERT});
      
              }
        
        }
          
          
        }
        else{
          //Jefe Evaluando Docente (se pone el atributo Jefe igual a 1)
          
        for(i=1; i< Object.keys(payload).length ; i++){
        console.log('SIZE: '+Object.keys(payload).length); // tamano del objeto
        console.log('PREGUNTA '+i); // numero de la pregunta
        console.log('VALOR: '+payload[i]); //aqui sale el valor de cada respuesta
        
              //Cuando sea la ultima posicion no debe hacer query, sale la seccion porque el payload se jala todo
              if(i!=Object.keys(payload).length){
          
              sequelize.query('INSERT INTO RespuestaA (DocenteId,PreguntaAId,Jefe,Valor) VALUES( '+idDocente+' ,'+i+','+1+' , '+payload[i]+' ) ' , 
              {type: sequelize.QueryTypes.INSERT});
      
              }
        
          }
        }
        
      }
      else{
        
        //Docente AutoEvaluandose se pone atributo Jefe igual a 0
        
        for(i=1; i< Object.keys(payload).length ; i++){
        console.log('SIZE: '+Object.keys(payload).length); // tamano del objeto
        console.log('PREGUNTA '+i); // numero de la pregunta
        console.log('VALOR: '+payload[i]); //aqui sale el valor de cada respuesta
        
              //Cuando sea la ultima posicion no debe hacer query, sale la seccion porque el payload se jala todo
              if(i!=Object.keys(payload).length){
          
              sequelize.query('INSERT INTO RespuestaA (DocenteId,PreguntaAId,Jefe,Valor) VALUES( '+idDocenteAuto+' ,'+i+','+0+' , '+payload[i]+' ) ' , 
              {type: sequelize.QueryTypes.INSERT});
      
              }
        
          }
        
        
      }
      
      
      
      
      
     console.log(payload);
     reply.file('Vistas/EncuestaA.html');
      
        }
      }
    },
    {
      method: 'GET',
      path: '/Modificaciones',
      config: {
          auth: {
              strategy: 'session',
              scope: ['admin']
          },
      handler:function (request, reply){
            reply.file('Vistas/Modificaciones.html');
        }
      }
    },
    {
      method: 'POST',
      path: '/Modificaciones',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin']
        }
      ,
      handler:function (request, reply){
            
        let datos = {
              idEnunciado: request.payload.enunciado,
              Encuesta: request.payload.encuesta,
              Nombre: request.payload.nombre,
              Cedula: request.payload.cedula,
              Email: request.payload.email,
              Carnet: request.payload.carnet,
              Contraseña: request.payload.contraseña,
              Departamento: request.payload.dept,
              Enunciado: request.payload.inputEnunciado,
              Docente: request.payload.docentes,
              Dept: request.payload.depart,
              Depts: request.payload.departa,
              Docente2: request.payload.docentess,
              Materia: request.payload.seccions,
              Modalidad: request.payload.modalidad,
              Cantidad: request.payload.capacidad,
              
              action: request.payload.boton,
              
              Rol: request.payload.rol,
        };
        console.log('DEPART:'+datos.Dept);
        if(datos.Encuesta=='A'){
          console.log('ACCIONES DE MODIFICACION ENCUESTA A');
          console.log('ENCUESTA: '+datos.Encuesta);
          console.log('ID DE ENUNCIADO: '+datos.idEnunciado);
          console.log('ENUNCIADO: '+datos.Enunciado);
          
          const preguntaA = models.Pregunta_A;
          if(datos.action=='eliminar enunciado'){
            preguntaA.destroy({ where: ["id = ?", datos.idEnunciado] }).then(function(){});
            models.sequelize.sync().then(function(){});
          }
          if(datos.action=='actualizar enunciado'){
            preguntaA.update({Enunciado: datos.Enunciado},{ where: ["id = ?", datos.idEnunciado] }).then(function(){s
            });
            models.sequelize.sync().then(function(){});
          }
          if(datos.action=='agregar enunciado'){
            preguntaA.create({
              Enunciado: datos.Enunciado,
            });
            models.sequelize.sync().then(function(){});
          }
            
        }
        if(datos.Encuesta=='B'){
          console.log('ACCIONES DE MODIFICACION ENCUESTA B');
          console.log('ENCUESTA: '+datos.Encuesta);
          console.log('ID DE ENUNCIADO: '+datos.idEnunciado);
          console.log('ENUNCIADO: '+datos.Enunciado);
          console.log(''+datos.action);
          
          const preguntaB = models.Pregunta_B;
          if(datos.action=='eliminar enunciado'){
            preguntaB.destroy({ where: ["id = ?", datos.idEnunciado] }).then(function(){});
            models.sequelize.sync().then(function(){});
          }
          if(datos.action=='actualizar enunciado'){
            preguntaB.update({Enunciado:datos.Enunciado},{ where: ["id = ?", datos.idEnunciado] }).then(function(){
            });
            models.sequelize.sync().then(function(){});
          }
          if(datos.action=='agregar enunciado'){
            preguntaB.create({
              Enunciado: datos.Enunciado,
            });
            models.sequelize.sync().then(function(){});
          }
          
        }
        
        if(datos.Encuesta=='C'){
          console.log('AGREGAR DOCENTE');
          console.log('NOMBRE: '+datos.Nombre);
          console.log('CEDULA: '+datos.Cedula);
          console.log('EMAIL: '+datos.Email);
          console.log('CARNET: '+datos.Carnet);
          console.log('CONTRASEÑA: '+datos.Contraseña);
          console.log('DEPARTAMENTO: '+datos.Departamento);
          console.log('ROL: '+datos.Rol);
          
          
          
            let usuario = {
                correo: request.payload.email,
                password: request.payload.contraseña,
                rol: request.payload.rol,
                nombre: request.payload.nombre,
                carnet: request.payload.carnet,
                cedula: request.payload.cedula,
                departamento: request.payload.dept,
            };
            
            console.log("Nombre: "+usuario.nombre);
            console.log("Email: "+usuario.correo);
            console.log("Clave: "+usuario.password);
            console.log("Rol: "+usuario.rol);
            console.log("Carnet: "+usuario.carnet);
            
            const modelo = models.Usuario;
            
            // VALIDACION PARA AGREGAR PROFESORES DESDE LA PAGINA DE MODIFICACIONES//
            modelo.findAndCountAll({ where: ["Correo = ?", usuario.correo] }).then(function(cantidad){
                console.log('Cantidad (correo): '+cantidad.count);
                if(cantidad.count<1){
                  
                  var estudiante = models.Estudiante;
                  var profesor = models.Docente;
                
                  models.sequelize.sync().then(function(){
                    
                    estudiante.findAndCountAll({ where: {Carnet: usuario.carnet} }).then(function(est){ //BUSQUEDA DE CANTIDAD DE ESTUDIANTES
                      console.log('CANTIDAD ESTUDIANTE: '+est.count);
                      
                      estudiante.findAndCountAll({ where: {Cedula: usuario.cedula} }).then(function(ced1){ //BUSQUEDA DE CANTIDAD DE ESTUDIANTES
                        console.log('CANTIDAD ESTUDIANTE (cedula): '+ced1.count);
                      
                        profesor.findAndCountAll({ where: {Carnet: usuario.carnet} }).then(function(prof){ //BUSQUEDA DE CANTIDAD DE PROFESORES
                          console.log('CANTIDAD PROFESOR: '+prof.count);
                          
                          profesor.findAndCountAll({ where: {Cedula: usuario.cedula} }).then(function(ced2){ //BUSQYEDA DE CANTIDAD DE PROFESORES
                            console.log('CANTIDAD PROFESOR (cedula): '+ced2.count);
                            
                            if(est.count<1 && prof.count<1 && ced1.count<1 && ced2.count<1){ // SI NO HAY PROFESORES NI ESTUDIANTES REGISTRADOS EN SUS TABLAS
                              
                              modelo.create({                //CREACION DE USUsARIO
                                Correo: usuario.correo,
                                Password: usuario.password,
                                scope: usuario.rol
                              });
                              models.sequelize.sync().then(function(){
                                  modelo.findOne({ where: {Correo: usuario.correo} }).then(function(res){ //BUSQUEDA DEL ID DEL CORRREO
                                    console.log('ID del correo buscado: '+res.id);
                                      models.sequelize.sync().then(function(){
                                        profesor.create({   //CREACION EN CASO DE SER PROFESOR
                                          Nombre: usuario.nombre,
                                          Correo: usuario.correo,
                                          Cedula: usuario.cedula,
                                          Carnet: usuario.carnet,
                                          UsuarioId: res.id,
                                          DepartamentoId: usuario.departamento,
                                        }) //CREATE
                                        .catch(function(err) {
                                          console.log('ERROR');
                                        });
                                      }); // SYNC
                                  }); // MODELO.FINDONE 
                                  reply.file('Vistas/Modificaciones.html');
                              });
                      } // CIERRE DEL ELSE
                            else{
                              reply.file('Vistas/Error.html');
                            }
                        });      
                        });
                    });    
                    });
                      
                  });
                  
                }
                else{
                  reply.file('Vistas/Error.html');  
                }
            });
        
          
        }
        
        if(datos.Encuesta=='D'){
          console.log('ASIGNACION DE JEFE DE DEPARTAMENTO');
          console.log('DOCENTE ID: '+datos.Docente);
          console.log('DEPT ID: '+datos.Dept);
          
          const depart = models.Departamento;
          depart.update({JefeID:datos.Docente},{ where: ["id = ?", datos.Dept] }).then(function(){});
          models.sequelize.sync().then(function(){});
          
        }
        
        if(datos.Encuesta == 'E'){
          console.log('CREACION DE UNA SECCION');
          console.log('DOCENTE ID: '+datos.Docente2);
          console.log('DEPT ID: '+datos.Depts);
          console.log('MAT ID '+datos.Materia);
          
          models.sequelize.sync().then(function(){
            models.Seccion.findAndCountAll({ where:{MateriumId: datos.Materia}}).then(function(res){
              console.log('Num_Seccion a insertar: '+res.count+1);
              
    
          sequelize.query('INSERT INTO Seccions (Modalidad,Capacidad,Num_Seccion,DocenteId,MateriumId) VALUES ("'+datos.Modalidad+'",'+datos.Cantidad+','+(res.count+1)+','+datos.Docente2+','+datos.Materia+')' , 
        {type: sequelize.QueryTypes.INSERT });
            
            
            });
            
          });
          
          
        }
        reply.file('Vistas/Modificaciones.html');
        
        }
      }
    },
    {
      method: 'POST',
      path: '/asignarJefe',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin']
        }
      ,
      handler:function (request, reply){
            
        let datos = {
              epa: request.payload.depart,
              epa2: request.payload.docentes,
            };
        
           console.log(datos);
        }
      }
    },
    {
      method: 'POST',
      path: '/aaa',
      config: {
        auth:{
          strategy: 'session',
          scope: ['admin']
        }
      ,
      handler:function (request, reply){
            
        let datos = {
              epa: request.payload.enunciado,
            };
        
           console.log(datos);
        }
      }
    },
    {
      method: 'GET',
      path: '/EncuestaB',
      config: {
          auth: {
              strategy: 'session',
              scope: ['admin','Estudiante']
          },
      
      handler:function (request, reply){
            reply.file('Vistas/EncuestaB.html');
      }
     }
    },
    {
      method: 'GET',
      path: '/Inscripcion',
      config: {
          auth: {
              strategy: 'session',
              scope: ['admin','Estudiante']
          },
      
      handler:function (request, reply){
            reply.file('Vistas/Inscripcion.html');
      }
     }
    },
    
    {
      method: 'POST',
      path: '/Inscripcion',
      config: {
          auth: {
              strategy: 'session',
              scope: ['admin','Estudiante']
          },
      
      handler:function (request, reply){
            let datos = {
              correo: request.auth.credentials.correo,
              materia : request.payload.materia,
              seccion: request.payload.seccion
            };
            
            if(datos.seccion == null){
              return reply('No selecciono ninguna seccion');
            }
            
            if(datos.materia == null){
              return reply('No selecciono ninguna materia');
            }
            
            models.Estudiante.findOne({where:{Correo: datos.correo}}).then(function(res){
              models.Seccion.findById(datos.seccion).then(function(resultado){
                  models.sequelize.sync().then(function(){
                    res.addSeccion(resultado);
                    
                    });
               });
            });
            
            console.log(datos.correo);
            reply.file('Vistas/Inscripcion.html');
      }
     }
    },
    
    
    {
      method: 'GET',
      path: '/Reporte',
      config:{
        auth: {
          strategy: 'session',
          scope: ['Profesor' , 'admin']
        },
        
      handler: function(request,reply){
        
        reply.file('Vistas/Reporte.html');
        }
        
      }
    },
    {
      method: 'GET',
      path: '/getReporte',
      config:{
        auth: {
          strategy: 'session',
          scope: ['Profesor' , 'admin']
        },
        
      handler: function(request,reply){
        let doc = request.auth.credentials.id;
        
        let vec ={
          promA: 0,
          promB: 0,
          promJefe: 0,
          promAJefe:0,
        };
       

        sequelize.query('SELECT AVG(Valor) as promedioA from `RespuestaA` WHERE DocenteId = ? and Jefe=0;',
        { replacements: [doc], type: sequelize.QueryTypes.SELECT }).then(promA => {
          console.log('PromedioA: '+promA[0].promedioA);
          sequelize.query('SELECT AVG(Valor) as promedioB from `RespuestaB` inner join Seccions ON RespuestaB.SeccionID =Seccions.id WHERE DocenteId = ?',
          { replacements: [doc], type: sequelize.QueryTypes.SELECT }).then(promB => {
            console.log('PromedioB: '+promB[0].promedioB);
            sequelize.query('SELECT AVG(Valor) as promedioJefe from `RespuestaA` WHERE DocenteId = ? and Jefe=1;',
            { replacements: [doc], type: sequelize.QueryTypes.SELECT }).then(promJefe => {
              console.log('PromedioJefe: '+promJefe[0].promedioJefe);
              if(promA[0].promedioA!=null){
                vec.promA=promA[0].promedioA;
              }
              
              if(promB[0].promedioB!=null){
                vec.promB=promB[0].promedioB;  
              }
              if(promJefe[0].promedioJefe!=null){
                vec.promJefe=promJefe[0].promedioJefe;  
              }
              if(promA[0].promedioA!=null && promJefe[0].promedioJefe!=null){
                vec.promAJefe=(vec.promA+vec.promJefe)/2;  
              }
              //aqui se devuelve el vector con los promedios a las rutas
              reply(vec);
            }); 
          });
        });
        
        }
     
      }
    },
        
    {
      method: 'GET',
      path: '/getInfo',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:function(request,reply){
      
            sequelize.query("SELECT * FROM `RespuestaA`", { type: sequelize.QueryTypes.SELECT})
              .then(respuestaA => {
                
                reply(respuestaA);
            });
      
          
          }
      }

    },
    
    
    {
      method: 'GET',
      path: '/css/{path*}',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:{
          directory:{
              path: './css',
              listing: false,
              index: false,
          }
      }
      }

    },
    //Ruta para mostrar registros de la tabla Materia en la BD
  
    {
      method: 'GET',
      path: '/mostrarMateria',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
        
        let usuario = request.auth.credentials.id;
        
            models.Materia.findAll().then(function(data){
               reply(data);
            });
      }
     }
    },
    
    {
      method: 'GET',
      path: '/mostrarMateriaDepartamento',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
        
        let usuario = request.auth.credentials.id;
        
            models.Materia.findAll({where: { DepartamentoId: request.auth.credentials.departamentoId}}).then(function(data){
               reply(data);
            });
      }
     }
    },
    
    {
      method: 'GET',
      path: '/getDocentes',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
        
            models.Docente.findAll().then(function(data){
               reply(data);
            });
      }
     }
    },
    
    {
      method: 'GET',
      path: '/getSecciones',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){

            
            models.Seccion.findAll({include:[{
              
              model: models.Estudiante,
              where: {id:request.auth.credentials.id},
            }]})
            .then(function(data){
              reply(data);
              
            });
      }
     }
    },
    
    {
      method: 'GET',
      path: '/getSeccionesIns',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
            
            models.Seccion.findAll().then(function(data){
              reply(data);
            });
      }
     }
    },
     {
      method: 'GET',
      path: '/usuarioActivo',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
            reply(request.auth.credentials);
            
      }
     }
    },
    {
      method: 'GET',
      path: '/getJefes',
      config: {
      auth: {
        mode: 'try',
        strategy: 'session'
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        }
      },
      handler:function (request, reply){
            
         models.Departamento.findAll({attributes: ['id','Nombre','JefeID']}).then(function(data){
              reply(data);
            });
      }
     }
    },
 {
      method: 'GET',
      path: '/js/{path*}',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:{
          directory:{
              path: './js',
              listing: false,
              index: false,
          }
      }
      }

    },
    
    {
      method: 'GET',
      path: '/img/{path*}',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:{
          directory:{
              path: './img',
              listing: false,
              index: false,
          }
      }
      }

    },
    
    {
      method: 'GET',
      path: '/estudiantesInscritos',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:function(request,reply){
      
            sequelize.query("SELECT * FROM `SeccionEstudiante`", { type: sequelize.QueryTypes.SELECT})
              .then(estudiantes => {
                
                reply(estudiantes);
            });
      
          
          }
      }

    }, {
      method: 'GET',
      path: '/RespuestaA',
      config:{
        auth:{
          mode: 'try',
          strategy: 'session'
        },
        plugins:{
          'hapi-auth-cookie': {
          redirectTo: false
          }
        },
      handler:function(request,reply){
      
            sequelize.query("SELECT * FROM `RespuestaA`", { type: sequelize.QueryTypes.SELECT})
              .then(estudiantes => {
                
                reply(estudiantes);
            });
      
          
          }
      }

    }
    
    
    
    
    
            ];