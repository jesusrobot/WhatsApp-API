const { Router } = require('express')
const router = Router()
const { verifyToken, receiveMessage } = require('../controllers/whatsappController')

router.get('/', verifyToken)
router.post('/', receiveMessage)

module.exports = router