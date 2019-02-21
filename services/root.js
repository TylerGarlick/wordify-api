'use strict'

const Persistence = require('../persistence')

module.exports = async function (fastify, opts) {
  
  fastify.get('/', async function (request, reply) {
    const words = await Persistence.getWords()
    return reply
      .status(200)
      .send(words)
  })
  
  fastify.get('/:key', async (req, reply) => {
    const { key } = req.params
    const word = await Persistence.findById(key)
    console.log(word)
    return reply
      .status(200)
      .send(word)
  })
  
  fastify.post('/', async (req, reply) => {
  
  })
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
