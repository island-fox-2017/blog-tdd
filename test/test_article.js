'use strict'

const chai = require('chai')
const should = chai.should()
const axios = require('axios')
const Article = require('../models/Article')
const controller = require('../controller/article')

describe('test Router API Article', function(){
  it('test connect to endpoint GET', function(){
    return axios.get('http://localhost:3000/article')
    .then(response=>{
      response.status.should.equal(200)
      response.status.should.not.equal(404)
      response.data[0].should.have.property('judul')
      response.data[0].should.have.property('isi')
      response.data.should.be.a('array')
    })
  })

  it('test connect to endpoint POST', function(){
    return  axios.post('http://localhost:3000/article',{
      judul: 'Melali sambil Melajah',
      isi: 'Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah Melali sambil Melajah'
    })
    .then(response=>{
      response.status.should.equal(200)
      // console.log(response.data.judul);
      response.data.judul.should.equal('Melali sambil Melajah')
    })
  })

  it('test connect to endpoint get One Article', function(){
    return axios.get('http://localhost:3000/article/59883aa77ebcb850b695408b')
    .then(response=>{
      response.status.should.equal(200)
      response.data.should.be.a('object')
    })
  })


  // it('test connect to endpoint Delete', function(){
  //   return axios.delete('http://localhost:3000/article/59883b3955a59d515af169da')
  //   .then(response=>{
  //     response.status.should.equal(200)
  //   })
  // })

  it('test edit file', function(){
    return axios.put('http://localhost:3000/article/59883aa77ebcb850b695408b',{
      judul: 'gemilang'
    })
    .then(response=>{
      response.status.should.equal(200)
    })
  })


})
