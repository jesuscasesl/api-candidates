const express = require('express')

const router = express.Router()

// Routes
router.get('/', require('./allCandidates'))

module.exports = router
