//  A aquí requerimos express para crear nuestro servidor
const express =  require('express');
//  A aquí requerimos  La conexión  de la base de datos
require('./db/db');
const app = express();



// Setting 
app.set('port' , process.env.PORT || 3000 );


// widdleware 
app.use(express.urlencoded({extended: false }));

// routes
app.use('/api_resfull/' , require('./routes/routes'));

// server 
const server = async () => {
    await app.listen(app.get('port') , () => {
        console.log(`${app.get('port')}`);
    })
}

server();