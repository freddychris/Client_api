const addressController = require('../controllers/address.controller.js');

function addresses(fastify, opts, next) {
    fastify.post('/addresses', addressController.create);
    fastify.get('/addresses', addressController.list);
    fastify.get('/addresses/:addresses_id', addressController.view);
    fastify.put('/addresses/:addresses_id/update', addressController.update);
    fastify.delete('/addresses/:addresses_id/destroy', addressController.destroy );
    next();
}


module.exports = addresses;