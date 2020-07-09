const { response } = require('../utils')

function candidateBySkills (req, res, next) {
  const skills = req.query.skills

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return response.error(res, 'Bad Request - Not Skills', 422)
  }

  next()
}

module.exports = candidateBySkills
