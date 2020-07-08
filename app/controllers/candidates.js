const CandidatesModel = require('../models/candidates')

const CandidatesController = {}

CandidatesController.all = () => {
  return CandidatesModel.getAllCandidates()
}

module.exports = CandidatesController
