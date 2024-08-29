const fastify = require('fastify')({ logger: true })

var getCronString = require('@darkeyedevelopers/natural-cron.js')

const INVALID_CRON = "* * * * ? *"
const PORT = process.env.port || 3000

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            type: 'object',
            properties: {
                schedule: { type: 'string' }
            },
            required: ['schedule'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    cron: { type: 'string'}
                },
            },
        },
    },
    handler: async (request, reply) => {
        let cron = getCronString(request.query.schedule)
        if (cron === INVALID_CRON) reply.code(400).send()
        else reply.code(200).send(cron)
    }
  })

  fastify.listen({ host: "0.0.0.0", port: PORT }, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })