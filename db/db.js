
//  A aquí requerimos mongoose Para hacer La conexión 
const  mongodb = require('mongoose');
/*
    Para  la conexión a la base de datos utilizaremos la dirección de la base de dato que creamos en la plataforma de mongodb atlas.
    mongodb+srv://api:<password>@cluster0-nrnnx.mongodb.net/test?retryWrites=true&w=majority
*/
mongodb.connect('mongodb+srv://api:<password>@cluster0-nrnnx.mongodb.net/test?retryWrites=true&w=majority'
                 , {useNewUrlParser:  true})
                 .then(res => console.log('Is connect a mongodb'))
                 .catch(err  => console.log(err))