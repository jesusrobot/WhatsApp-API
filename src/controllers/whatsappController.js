/**
 * Hay dos métodos importantes para usar el api de wp
 * 1. verificacion del token
 * 2. recivir los mensajes que llegan de wp
 */

const verifyToken = (req, res) => {
  try {
    let accessToken = process.env.ACCESS_TOKEN
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge)
    } else {
      res.status(400).send()
    }
  } catch (e) {
    res.status(400).send()
  }
}

const receiveMessage = (req, res) => {
  res.send('Hello from receiveMessage method')
}

module.exports = {
  verifyToken,
  receiveMessage
}