'use strict'

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
})

describe('POST method on route /blog/', () => {
  it('Connect Status 200 OK', () => {
    return axios.post('http://localhost:3000/blog/')
    .then(response=>{
      assert.equal(response.status, 200)
    })
  })

  it('Data Input Correct', () => {
    return axios.post('http://localhost:3000/blog/', {
      title: 'Sebuah cerita',
      article: 'ini adalah sebuah cerita tentang sebuah cerita yang diceritakan oleh pencerita cerita'
    })
    .then(response=>{
      assert.equal(response.data.title, 'Sebuah cerita')
    })
  })
})

describe('GET method on route /blog/:id', () => {
  it('Connect Status 200 OK', () => {
    return axios.get('http://localhost:3000/blog/59882d282a84e8581cdf14a9')
    .then(response=>{
      assert.equal(response.status, 200)
    })
  })
})

describe('PUT method on route /blog/:id', () => {
  it('Connect Status 200 OK', () => {
    return axios.get('http://localhost:3000/blog/59882d282a84e8581cdf14a9', {
      title: 'Sepanjang Kita Masih Updated'
    })
    .then(response=>{
      assert.equal(response.status, 200)
    })
  })
})

describe('Test Return Data Structure', () => {
  it('Return an Object', () => {
    return axios.get('http://localhost:3000/blog/test')
    .then(resp => {
      assert.isObject(resp.data, 'This is indeed an Object')
    })
  })

  it('Return an Array', () => {
    return axios.get('http://localhost:3000/blog/')
    .then(resp => {
      assert.isArray(resp.data, 'This is indeed an Array')
    })
  })
})

describe('DELETE method on route /blog/:id', () => {
  it('Connect Status 200 OK, and Deleted', () => {
    return axios.delete('http://localhost:3000/blog/59882d282a84e8581cdf14a9')
    .then(response=>{
      assert.equal(response.status, 200)
    })
  })
})
