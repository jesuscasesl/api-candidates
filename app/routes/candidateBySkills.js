const { response } = require('../utils')

const Candidates = require('../controllers/candidates')

function candidateBySkills (req, res) {
  const skills = req.query.skills

  return Candidates.search(skills)
    .then(bestCandidate => {
      if (Object.keys(bestCandidate).length === 0) {
        return response.error(res, 'There are not candidates for this search for skills', 404)
      }

      return response.success(res, bestCandidate, 200)
    })
    .catch(err => {
      response.error(res, err, 400)
    })
}

module.exports = candidateBySkills
