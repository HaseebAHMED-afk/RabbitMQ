const { initiateChange } = require('../Controllers/Change')

const router = require('express').Router()

router.get('/initiateChange' , initiateChange)

module.exports = router