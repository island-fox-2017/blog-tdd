

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

describe('CRUD GET /api/articles', function () {
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

describe('CRUD POST /api/articles', function () {

  afterEach(function(done) {
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

  it(`response should be an object`, function(done) {
    axios.post(url+`api/articles`, {
      author: 'fajar',
      title: 'judul 1',
      content: 'content judul 1'
    })
    .then(response => {
      response.data.should.be.an('object')
      done()
    })
  })

  it(`response have property content`, function(done) {
    axios.post(url+`api/articles`, {
      author: 'user',
      title: 'coba',
      content: 'ini content percobaan'
    })
    .then(response => {
      response.data.should.have.property('content')
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })

  it(`response should have not property title`, function(done) {
    axios.post(url+`api/articles`)
    .then(response => {
      response.data.should.have.not.property('title')
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

describe('CRUD PUT /api/articles/:id', function () {

  var id

  beforeEach(function(done) {
    axios.post(url+`api/articles/`, {
      author: 'fajar',
      title: 'halo',
      content: 'halo'
    })
    .then(response => {
      console.log(response.data);
      id = response.data._id
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
  })

  afterEach(function(done) {
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

  it(`response data title should be edited to edited`, function(done) {
    console.log(`ini di test idnya ${id}`);
    axios.put(url+`api/articles/${id}`, {
      title: 'edited'
    })
    .then(response => {
      response.data.title.should.equal('edited')
      done()
    })
  })
})

describe('CRUD DELETE /api/articles/:id', function () {

  var id

  beforeEach(function(done) {
    axios.post(url+`api/articles/`, {
      author: 'fajar',
      title: 'halo',
      content: 'halo'
    })
    .then(response => {
      console.log(response.data);
      id = response.data._id
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
  })

  afterEach(function(done) {
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

  it(`response data should be 0`, function(done) {
    axios.delete(url+`api/articles/${id}`)
    .then(response => {
      axios.get(url+`api/articles`)
      .then(response => {
        response.data.length.should.equal(0)
        done()
      })
    })
  })
})
