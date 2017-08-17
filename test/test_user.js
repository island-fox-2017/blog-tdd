'use strict'

const chai = require('chai')
const should = chai.should()
const axios = require('axios')

describe('POST route /users/signin', function(){
  it('connect status to server, return status OK', function(){
    return axios.post('http://localhost:3000/users/signin')
    .then(response=>{
      response.status.should.equal(200)
    })
  })
})

describe('POST route /users/signup', function(){
  it('connect status to server, return status OK', function(){
    return axios.post('http://localhost:3000/users/signup')
    .then(response=>{
      response.status.should.equal(200)
    })
  })
})
