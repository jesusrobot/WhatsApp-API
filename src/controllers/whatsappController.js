const fs = require('fs')
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'))
/**
 * Hay dos métodos importantes para usar el api de wp
 * 1. verificacion del token de wp
 * 2. recivir los mensajes que llegan de wp
 */

const verifyToken = (req, res) => {
  try {
    let accessToken = process.env.ACCESS_TOKEN
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']

    if (challenge !== null && token !== null && token === accessToken) {
      res.send(challenge)
    } else {
      res.status(400).send()
    }
  } catch (e) {
    res.status(400).send()
  }
}

const receiveMessage = (req, res) => {
  try {
    let entry = (req.body['entry'])[0]
    let changes = (entry['changes'])[0]
    let value = changes['value']
    let messageObject = value['messages']
    
    myConsole.log(messageObject)
    res.send('EVENT_RECEIVED')
  } catch (e) {
    myConsole.log(e)
    res.send('EVENT_RECEIVED')
  }
}

module.exports = {
  verifyToken,
  receiveMessage
}