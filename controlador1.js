const modelDatos = require('./modelo1');
const ctrlDatos = {
    findDatos: async (req, res) => {
        const { fecha } = req.params;
        console.log("prueba " + fecha);
        const data = await modelDatos.getData(fecha);
        
        //console.log("----->", data); //tiene muchas mas informacion que la que necesito
        console.log("----->", data.data, req.body);
        res.json(data.data); //la respuesta del servidor se genera aqui
    }
}
module.exports = ctrlDatos