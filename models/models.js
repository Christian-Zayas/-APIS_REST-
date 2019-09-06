//  A aquí requerimos mongoose Para hacer la colección 
const  mongodb = require('mongoose');
// Aquí extraemos Schema de mongodb para crear la colección 
const  { Schema } =  mongodb;


// Hacemos la colección a nuestra necesidad 
const api = new Schema({
     name: {type:  String  },
     lastname: {type: String},
     date: { type: Date , default:   Date.now}
});

// Exportamos api
module.exports =  mongodb.model('api' , api);