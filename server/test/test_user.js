'use strict'

const chai = require('chai');
const assert = chai.assert;
const axios = require('axios');

describe("POST method on route /user/register", () => {
  it("Connect status 200 OK", () => {
    return axios.post('http://localhost:3000/user/register', {
      username: 'someone',
      password: 'someone'
    })
    .then(resp => {
      assert.equal(resp.status, 200)
    })
  })
})

describe("POST method on route /user/login", () => {
  it("Connect status 200 OK", () => {
    return axios.post('http://localhost:3000/user/login')
    .then(resp => {
      assert.equal(resp.status, 200)
    })
  })
})
