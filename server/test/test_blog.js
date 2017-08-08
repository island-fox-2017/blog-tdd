const chai = require('chai');
const assert = chai.assert;
const axios = require('axios');

describe('Testing Blog Server - ', function() {

  it('Object should have \'title\' field', function() {
    return axios.get('http://localhost:3000/blog/test')
    .then(resp => {
      assert.property(resp.data, 'title');
    })
  })

  it('title should be vlogger', function() {
    return axios.get('http://localhost:3000/blog/test')
    .then(resp => {
      assert.equal(resp.data.title, 'vlogger', 'your title should be vlogger!!!');
    })
  })

  it('connected', function() {
    return axios.get('http://localhost:3000/blog')
    .then(resp => {
      assert.equal(resp.status, '200')
    })
  })

  it('petualangan mencari controller', function() {
    
  })

})

describe('Testing Post Request - ', function() {

  // axios.post('http://localhost:3000/blog/', {
  //   title: 'Si Jerapah',
  //   article: 'Jerapah Baik'
  // })
  // .then(resp => {
  //   it('Hehehe', function() {
  //     assert.property(resp.data, 'title')
  //     assert.property(resp.data, 'articles')
  //   })
  // })

  // it('Should be submitting title and article & the types have to be string', function() {
  //   return axios.post('http://localhost:3000/blog/', {
  //     title: 'Si Jerapah',
  //     article: 'Jerapah Netral'
  //   })
  //   .then(resp => {
  //     assert.property(resp.data, 'title')
  //     assert.property(resp.data, 'articlez')
  //     assert.typeOf(resp.data.title, 'string')
  //     assert.typeOf(resp.data.article, 'number')
  //   })
  // })

})
