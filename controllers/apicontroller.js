
// Requerimos el modelo de la base de datos 
const api = require('../models/models');

  //Creamos una variable con el método de json 
   ctrl = {};

// En home extraemos todos los datos de la base de datos 
ctrl.home =  async (req , res ) => {
    // Aquí hacemos una busque general 
    const data =  await  api.find({})
    // Aquí mostramos los resultados por medio de un JSON
     res.json({
         Okay: true,
         status: 'Todo funciona',
         data
     });
   
};

// En findOne extraemos solo un dato  de la base de datos 
ctrl.findOne =  async (req , res ) => {
    // Aquí extraemos el id de la petición 
    const { id } = req.params;
    // Aquí hacemos una busque única 
    const data =  await  api.findOne({_id: id});
    // Aquí mostramos los resultados por medio de un JSON
    res.json({
        Okay: true,
        status: 'Todo funciona',
        data
    });
}


// En add agregamos los datos a la base de datos 
ctrl.add =  async (req , res ) => {
    // Aquí extraemos los datos que lo llegan por formulario 
    const body = req.body;
    // Aquí rellenamos la colección con los datos que estamos recibiendo 
    const data = new api({
        name: body.name,
        lastname: body.lastname
    });
    
     // Aquí mostramos los resultados por medio de un JSON
    res.json({
        Okay:  true,
        data
    });
    // Aquí guardamos los datos de la base de datos
    await data.save();

}

// En update actualizamos los datos a la base de datos 
ctrl.update = async (req , res ) => {
   // Aquí extraemos el id de la petición 
    const { id } = req.params;
    // Aquí extraemos los datos que lo llegan por formulario 
    const body = req.body;
   // En update actualizamos los datos a la base de datos 
    const data =  await  api.updateOne({ _id: id }, {$set: body });
     // Aquí mostramos los resultados por medio de un JSON
    res.json({
        Okay: true,
        status: 'Todo funciona'
        
    });

    

    
}


// En delete eliminamos los datos a la base de datos 
ctrl.delete =  async (req , res ) => {
       // Aquí extraemos el id de la petición 
    const { id } = req.params;
    // En delete eliminamos los datos a la base de datos
    const data =  await  api.deleteOne({_id: id});
      // Aquí mostramos los resultados por medio de un JSON
    res.json({
        Okay: true,
        status: 'Todo funciona',
        data
    });
    

}




// Exportamos ctrl
module.exports =  ctrl;