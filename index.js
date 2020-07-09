const express = require('express')

const config = require('./config')
const settings = require('./settings')

const router = require('./app/routes')

const app = express()

settings(app)

app.use('/candidates', router)

const server = app.listen(config.api.port, () => {
  console.log(`Listening port => : http://localhost:${config.api.port}`)
})

module.exports = {
  app,
  server
}
