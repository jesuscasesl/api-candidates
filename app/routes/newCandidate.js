const { response } = require('../utils')
const Candidates = require('../controllers/candidates')

function newCandidate (req, res) {
  return Candidates.add(req.body)
    .then(candidate => {
      response.success(res, candidate, 201)
    })
    .catch(err => {
      response.error(res, err, 400)
    })
}

module.exports = newCandidate
