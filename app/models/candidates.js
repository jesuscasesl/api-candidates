const data = require('../../database')
const { nanoid } = require('nanoid')

const CANDIDATES_TABLE = 'candidates'

async function getAllCandidates () {
  return data[CANDIDATES_TABLE]
}

async function newCandidate (candidate) {
  const newCandidate = {
    id: nanoid(),
    ...candidate
  }

  data[CANDIDATES_TABLE].push(newCandidate)

  return newCandidate
}

module.exports = {
  getAllCandidates,
  newCandidate
}
