var chai = require('chai')
var should = chai.should()
var axios = require('axios')
var program = require('../function_testing_api')

var paramsId = ''

// describe('penjumlahan a dan b', function() {
//   it('dikasih parameter 5 dan 10 akan jadi 15', function() {
//     program.sum(5,10).should.equal(15)
//   })
// })

// find all
describe('testing find all with api from server side', function() {
  it('GET to /article should return json data', function(done) {
    axios.get('http://localhost:3000/article')
    .then(function(response){
      response.data[0].should.have.property('title')
      done()
    })
  })
})

// create article ( di matiin dulu.. soal create terus tiap dipanggil)
// describe('testing create article', function() {
// 	it('POST to /article should return object-article', function(done) {
// 		axios.post('http://localhost:3000/article',
// 		{
// 			author: 'budhi',
//       title: 'mentari pagi',
//       description: 'bangun pagi lari pagi dan lihat mentari pagi'
// 		})
// 		.then(function(response) {
//     //  console.log(response);
// 		response.data.author.should.equal('budhi')
// 		done()
//     })
//   })
// })

// findbyid - lgs pake id ne /statis
describe('testing find by id', function() {
  it('GET to /article/:id should return json data', function(done) {
    axios.get('http://localhost:3000/article/5988241f48cf5b7149f79481')
    .then(function(response){
      response.data.should.have.property('title')
      response.data.author.should.equal('makara')
      done()
    })
  })
})

//findbyid - dinamis
describe('testing find by id - dinamis', function(id) {
  it('GET to /article/:id should return json data', function(done) {
    axios.get(`http://localhost:3000/article/${id}`)
    .then(function(response){
      response.data.should.have.property('title')
    //response.data.author.should.equal('makara')
      done()
    })
  })
})


//  edit byid







//why error?
// delete by id
// describe('testing delete by id ', function() {
//   it('DELETE to /article/:id should return object dari data', function(done) {
//     axios.delete(`http://localhost:3000/article/5988304819a4de49c94c0478`)
//     .then(function(response){
//       console.log(response);
//       //response.data.should.have.property('author')
//       //response.data.title.should.equal('mentari pagi')
//       // object dari user + status
//       //response.data.should.have.status(200)
//       response.data.statusText.should.equal('OK')
//       done()
//     })
//   })
// })

































//--
