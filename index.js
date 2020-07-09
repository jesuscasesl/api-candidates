const express = require('express')
const swaggerUi = require('swagger-ui-express')

const { response } = require('./app/utils')

const config = require('./config')
const settings = require('./settings')

const router = require('./app/routes')

const app = express()

settings(app)

app.use('/candidates', router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json'), {
  explorer: true
}))

app.get('*', (req, res) => {
  return response.error(res, 'Not found', 404)
})

const server = app.listen(config.api.port, () => {
  console.log(`Listening port => : http://localhost:${config.api.port}`)
})

module.exports = {
  app,
  server
}
