const express = require('express')

const router = express.Router()

// Routes
router.get('/', require('./allCandidates'))

router.get('/search',
  require('../middlewares/candidateBySkills'),
  require('./candidateBySkills')
)

module.exports = router
