const{Cotizacion,CotizacionSchema}= require ("./cotizacionModel")


function setupModels(sequelize) {
    Cotizacion.init(CotizacionSchema, Cotizacion.config(sequelize))    
}

module.exports = setupModels;
