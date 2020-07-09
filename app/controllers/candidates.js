const CandidatesModel = require('../models/candidates')

const utils = require('../utils')

function isBestCandidate (numSkillsCandidate, numSkillForBestCandidate = 0) {
  if (numSkillsCandidate && numSkillsCandidate > numSkillForBestCandidate) {
    return true
  }
  return false
}

function isEnd (numSkillsForCandidate, skillsTotalForSearch, numCandidate, totalCandidates) {
  if (numSkillsForCandidate === skillsTotalForSearch || numCandidate === totalCandidates) {
    return true
  }
  return false
}

const CandidatesController = {}

CandidatesController.all = () => {
  return CandidatesModel.getAllCandidates()
}

CandidatesController.search = (skills) => {
  return CandidatesController.all()
    .then(candidatesLists => {
      if (!candidatesLists.length) {
        return {}
      }

      let bestCandidate = {}
      let indexCandidate = 0
      let countSkillsForCandidates = 0

      const skillsSearched = skills.map(skill => skill.toLowerCase())
      const ordenCandidates = utils.order(candidatesLists)

      do {
        countSkillsForCandidates = 0

        countSkillsForCandidates = ordenCandidates[indexCandidate].skills.reduce((acc, item) => {
          if (skillsSearched.includes(item.toLowerCase())) {
            acc += 1
          }

          return acc
        }, 0)

        if (isBestCandidate(countSkillsForCandidates, bestCandidate.numSkills)) {
          bestCandidate = ordenCandidates[indexCandidate]
          bestCandidate.numSkills = countSkillsForCandidates
        }

        indexCandidate += 1
      } while (!isEnd(countSkillsForCandidates, skillsSearched.length, indexCandidate, ordenCandidates.length))
      return bestCandidate
    })
}

module.exports = CandidatesController
