const request = require('supertest')
const assert = require('assert')

const { app, server } = require('../../index')

describe('GET /candidates', () => {
  describe('GET', () => {
    it('Should return a list of candidates', (done) => {
      request(app)
        .get('/candidates')
        .expect('Content-Type', /json/)
        .expect(200, {
          error: false
        })
        .end(() => {
          server.close()
          done()
        })
    })

    it('Bad route - Not found', (done) => {
      request(app)
        .get('/candidatesFails')
        .expect('Content-Type', /json/)
        .expect(404)
        .then(({ body }) => {
          assert(body.message === 'Not found')
        })
        .then(() => {
          server.close()
          done()
        })
    })

    it('Should return a best of candidate', (done) => {
      request(app)
        .get('/candidates/search?skills[]=php&skills[]=js')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(() => {
          server.close()
          done()
        })
    })

    it('Error - There are not candidates for this search for skills', (done) => {
      request(app)
        .get('/candidates/search?skills=failSkill')
        .expect('Content-Type', /json/)
        .expect(422)
        .then(({ body }) => {
          assert(body.message === 'Bad Request - Not Skills')
        })
        .then(() => {
          server.close()
          done()
        })
    })
  })
})
