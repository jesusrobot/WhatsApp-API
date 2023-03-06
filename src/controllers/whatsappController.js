/**
 * Hay dos métodos importantes para usar el api de wp
 * 1. verificacion del token
 * 2. recivir los mensajes que llegan de wp
 */

const verifyToken = (req, res) => {
  res.send('Hello from verifyToken method')
}

const receiveMessage = (req, res) => {
  res.send('Hello from receiveMessage method')
}

module.exports = {
  verifyToken,
  receiveMessage
}