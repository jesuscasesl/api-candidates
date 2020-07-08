const express = require('express')

const config = require('./config')

const app = express()

const server = app.listen(config.api.port, () => {
  console.log(`Listening port => : http://localhost:${config.api.port}`)
})

module.exports = {
  app,
  server
}
