
const fastify = require('fastify')({
  logger: true
})
const db = require('./models');
const addressRoutes = require('./routes/address.routes');
// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})
fastify.register(addressRoutes, { prefix: '/v1' });
// Run the server!
fastify.listen(3000, async function(err, address) {
  await db.sequelize.authenticate();


  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
