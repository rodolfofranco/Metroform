'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
var models = require('./models');
const file = require('./Rutas/file');
// var Bcrypt = require('bcrypt');
var CookieAuth = require('hapi-auth-cookie');


// Create a Server
const server = new Hapi.Server();
server.connection({ 
    host: process.env.IP, 
    port: process.env.PORT || 3306 
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('SE PRENDIO ESTE SERVER:', server.info.uri);
});

// RUTAS
server.register([Inert,CookieAuth],(err) =>{
    if (err){
        throw err;
    }
    

    server.auth.strategy('session', 'cookie', true,{
    password: 'm!*"2/),p4:xDs%KEgVr7;e#85Ah^WYC',
    cookie: 'metroform-cookie',
    redirectTo: '/',
    isSecure: false
    });
    
    server.route(file);
 
});

// SINCRONIZAR
 models.sequelize.sync().then(function() {
     server.start(function(){
         console.log('ESTO SE SINCRONIZO');
     });
 });