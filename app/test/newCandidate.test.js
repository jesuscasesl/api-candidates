const request = require('supertest')
const assert = require('assert')

const { app, server } = require('../../index')

describe('POST /candidates', () => {
  describe('POST', () => {
    it('Should return a list of candidates', (done) => {
      const data = {
        name: 'john',
        skills: ['JS', 'React', 'PHP']
      }

      request(app)
        .post('/candidates')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({ body }) => {
          assert(body.data.name === data.name)
        })
        .then(() => {
          server.close()
          done()
        })
    })

    it('Bad Request - Body empty', (done) => {
      const data = { }

      request(app)
        .post('/candidates')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422)
        .then(({ body }) => {
          assert(body.message === 'Bad Request - Body empty')
        })
        .then(() => {
          server.close()
          done()
        })
    })

    it('Bad Request - Name is required', (done) => {
      const data = {
        skills: ['JS', 'React', 'PHP']
      }

      request(app)
        .post('/candidates')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422)
        .then(({ body }) => {
          assert(body.message === 'Bad Request - Name is required')
        })
        .then(() => {
          server.close()
          done()
        })
    })

    it('Error not Skills - Bad Request - Skills are required', (done) => {
      const data = {
        name: 'Name Test'
      }

      request(app)
        .post('/candidates')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422)
        .then(({ body }) => {
          assert(body.message === 'Bad Request - Skills are required')
        })
        .then(() => {
          server.close()
          done()
        })
    })

    it('Bad Request - Skills must to be an array', (done) => {
      const data = {
        name: 'Name Test',
        skills: 'php'
      }

      request(app)
        .post('/candidates')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422)
        .then(({ body }) => {
          assert(body.message === 'Bad Request - Skills must to be an array')
        })
        .then(() => {
          server.close()
          done()
        })
    })
  })
})
