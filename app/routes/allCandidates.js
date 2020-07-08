const Candidates = require('../controllers/candidates')
const { response } = require('../utils')

function allCandidates (req, res) {
  return Candidates.all()
    .then(candidatesList => {
      return response.success(res, candidatesList)
    })
    .catch(err => {
      return response.error(res, err, 400)
    })
}

module.exports = allCandidates
