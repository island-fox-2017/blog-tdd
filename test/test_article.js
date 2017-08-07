'use strict'

const chai = require('chai')
const should = chai.should()
const axios = require('axios')
// const Article = require('../models/Article')
// const controller = require('../controller/article')


describe('GET route /article', function(){
  it('test connect to endpoint return status OK', function(){
    return axios.get('http://localhost:3000/article')
    .then(response=>{
      response.status.should.equal(200)
    })
  })

  it('test API return an Array', function(){
    return axios.get('http://localhost:3000/article')
    .then(response=>{
      response.data.should.be.a('array')
    })
  })
})

describe('POST route /article', function(){
  it('test connect to endpoint return status OK', function(){
    return axios.post('http://localhost:3000/article')
    .then(response=>{
      response.status.should.equal(200)
    })
  })

  it('test POST data to DB return log data', function(){
    return  axios.post('http://localhost:3000/article',{
      judul: 'Melali sambil Melajah',
      isi: 'Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah',
      auhor: 'i putu'
    })
    .then(response=>{
      response.data.judul.should.equal('Melali sambil Melajah')
    })
  })
})

describe('GET route /article/:id', function(){
  it('test connect to endpoint get One Article', function(){
    return axios.get('http://localhost:3000/article/59883aa77ebcb850b695408b')
    .then(response=>{
      response.status.should.equal(200)
    })
  })

  it('Return an Object', function(){
    return axios.get('http://localhost:3000/article/59883aa77ebcb850b695408b')
    .then(response=>{
      response.data.should.be.a('object')
    })
  })
})

describe('PUT route /article/:id', function(){
  it('test connect to endpoint return status OK', function(){
    return axios.put('http://localhost:3000/article/59883aa77ebcb850b695408b',{
      judul: 'gemilang'
    })
    .then(response=>{
      response.status.should.equal(200)
    })
  })
})

describe('DELETE route /article/:id', function(){
  it('test connect to endpoint Delete', function(){
    return axios.delete('http://localhost:3000/article/59883b4fce387d51972630fc')
    .then(response=>{
      response.status.should.equal(200)
    })
  })
})
