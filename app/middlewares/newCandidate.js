const { response } = require('../utils')

function newCandidate (req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return response.error(res, 'Bad Request - Body empty', 422)
  }

  if (!req.body.name) {
    return response.error(res, 'Bad Request - Name is required', 422)
  }

  if (!req.body.skills) {
    return response.error(res, 'Bad Request - Skills are required', 422)
  }

  if (!Array.isArray(req.body.skills) || !req.body.skills.length) {
    return response.error(res, 'Bad Request - Skills must to be an array', 422)
  }

  next()
}

module.exports = newCandidate
