const data = require('../../database')

const CANDIDATES_TABLE = 'candidates'

async function getAllCandidates () {
  return data[CANDIDATES_TABLE]
}

module.exports = {
  getAllCandidates
}
