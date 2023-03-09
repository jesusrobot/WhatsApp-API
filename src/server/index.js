const express = require('express')
const routes = require('../routes/routes')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000

    this.middlewares()
    this.router()
    this.start()
  }

  middlewares() {
    this.app.use(express.json())
  }

  router() {
    this.app.use('/whatsapp', routes)
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🌎 Server running on port ${ this.port }`)}
    )
  }
}

module.exports = Server