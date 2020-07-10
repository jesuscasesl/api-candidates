const { response } = require('../utils')

const REGEX = /^[a-zA-Z0-9_-]+$/i

function isInvalid (skills) {
  const newSkills = []
  const skillsSearched = skills.map(skill => skill.toLowerCase())

  for (let x = 0; x < skills.length; x += 1) {
    if (skills[x].length > 100 || skills[x].match(REGEX) === null || newSkills.includes(skillsSearched[x].toLowerCase())) {
      return true
    } else {
      newSkills.push(skills[x].toLowerCase())
    }
  }

  return false
}

function newCandidate (req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return response.error(res, 'Bad Request - Body empty', 422)
  }

  if (!req.body.name) {
    return response.error(res, 'Bad Request - Name is required', 422)
  }

  if (req.body.name && req.body.name.length > 100) {
    return response.error(res, 'Bad Request - The name has more than 100 characters', 422)
  }

  if (req.body.name && !req.body.name.match(REGEX)) {
    return response.error(res, 'Bad Request - Name is Alphanumeric', 422)
  }

  if (!req.body.skills) {
    return response.error(res, 'Bad Request - Skills are required', 422)
  }

  if (!Array.isArray(req.body.skills) || !req.body.skills.length) {
    return response.error(res, 'Bad Request - Skills must to be an array', 422)
  }

  if (!Array.isArray(req.body.skills) || req.body.skills.length > 10000) {
    return response.error(res, 'Bad Request - There are more than 10000 items', 422)
  }

  if (!Array.isArray(req.body.skills) || isInvalid(req.body.skills)) {
    return response.error(res, 'Bad Request - The skills is invalid', 422)
  }

  next()
}

module.exports = newCandidate
