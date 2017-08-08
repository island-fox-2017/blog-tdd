

var chai = require('chai')
  , chaiHttp = require('chai-http');
chai.use(chaiHttp);

var should = chai.should()
var axios = require('axios')
var url = `http://localhost:3000/`

// database
var Article = require('../server/models/article')

describe('GET /', function () {
  it(`Should have response data 'pong!'`, function(done) {
    axios.get(url)
    .then(response => {
      response.data.should.equal('pong!')
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })
})

describe('GET /api/articles', function () {
  before(function(done) {
    axios.post(url+`api/articles/seed`)
    .then(response => {
      console.log(response.data);
      done()
    })
    .catch(err => {
      console.log(err);
      done()
    })
  })

  after(function(done) {
    axios.delete(url+`api/articles/clear`)
    .then(response => {
      console.log(response.data);
      done()
    })
    .catch(err => {
      console.log(err);
      done()
    })
  })

  it(`response should be an array`, function(done) {
    axios.get(url+`api/articles`)
    .then(response => {
      response.data.should.be.an('array')
      done()
    })
  })

  it(`response should have 3 data`, function(done) {
    axios.get(url+`api/articles`)
    .then(response => {
      response.data.length.should.equal(3)
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })

  it(`Should NOT an empty array`, function(done) {
    axios.get(url+`api/articles`)
    .then(response => {
      response.data.length.should.not.equal(0)
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })

  it(`error response should not found and have status 404`, function(done) {
    axios.get(url+`api/artices`)
    .catch(err => {
      err.response.status.should.equal(404)
      done()
    })
  })
})


// describe('GET /api/articles/:articleID', function () {
//   it(`response should have status 200`, function(done) {
//     axios.get(url+`api/articles/1`)
//     .then(response => {
//       response.should.have.status(200)
//       done()
//     })
//   })
//
//   it(`Should not have response status 404`, function(done) {
//     axios.get(url+`api/articles/1`)
//     .then(response => {
//       response.should.not.have.status(404)
//       done()
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
//
//   it(`error response should have status 404`, function(done) {
//     axios.get(url+`api/articles/1/2`)
//     .catch(err => {
//       err.response.status.should.equal(404)
//       done()
//     })
//   })
// })
//
// describe('POST /api/articles', function () {
//   it(`response should have status 200`, function(done) {
//     axios.post(url+`api/articles`)
//     .then(response => {
//       response.should.have.status(200)
//       done()
//     })
//   })
//
//   it(`Should not have response status 404`, function(done) {
//     axios.post(url+`api/articles`)
//     .then(response => {
//       response.should.not.have.status(404)
//       done()
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
//
//   it(`error response should have status 404`, function(done) {
//     axios.post(url+`api/artices/1123123123`)
//     .catch(err => {
//       err.response.status.should.equal(404)
//       done()
//     })
//   })
// })
//
// describe('PUT /api/articles/:articleID', function () {
//   it(`response should have status 200`, function(done) {
//     axios.put(url+`api/articles/1`)
//     .then(response => {
//       response.should.have.status(200)
//       done()
//     })
//   })
//
//   it(`response should NOT have status 404`, function(done) {
//     axios.put(url+`api/articles/1`)
//     .then(response => {
//       response.status.should.not.equal(404)
//       done()
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
//
//   it(`error response should have status 404`, function(done) {
//     axios.put(url+`api/articles/1/2343`)
//     .catch(err => {
//       err.response.status.should.equal(404)
//       done()
//     })
//   })
// })
//
// describe('PUT /api/articles', function () {
//   it(`response should have status 200`, function(done) {
//     axios.put(url+`api/articles/1`)
//     .then(response => {
//       response.should.have.status(200)
//       done()
//     })
//   })
//
//   it(`response should NOT have status 404`, function(done) {
//     axios.put(url+`api/articles/1`)
//     .then(response => {
//       response.status.should.not.equal(404)
//       done()
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
//
//   it(`error response should have status 404`, function(done) {
//     axios.put(url+`api/articles/`)
//     .catch(err => {
//       err.response.status.should.equal(404)
//       done()
//     })
//   })
// })
//
// describe('DELETE /api/articles/:articleID', function () {
//   it(`response should have status 200`, function(done) {
//     axios.delete(url+`api/articles/1`)
//     .then(response => {
//       response.should.have.status(200)
//       done()
//     })
//   })
//
//   it(`response should NOT have status 404`, function(done) {
//     axios.delete(url+`api/articles/1`)
//     .then(response => {
//       response.status.should.not.equal(404)
//       done()
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
//
//   it(`error response should have status 404`, function(done) {
//     axios.delete(url+`api/articles/`)
//     .catch(err => {
//       err.response.status.should.equal(404)
//       done()
//     })
//   })
// })
