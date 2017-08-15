const chai = require('chai');
const should = chai.should();
const axios = require('axios');

describe('Testing untuk membuat user baru pada saat signup', () => {
  it('POST to /signup should return json', (done) => {
    axios.post('http://localhost:3000/signup', {
      name: 'Regina Andriane Saputri',
      username: 'regina',
      password: 'regina',
      email: 'regina@bloggo-ib.com',
      userIdFb: ''
    })
    .then((response) => {
      response.data.name.should.equal('Regina Andriane Saputri');
      response.data.should.have.property('name');
      response.data.username.should.equal('regina');
      response.data.should.have.property('username');
      response.data.email.should.equal('regina@bloggo-ib.com');
      response.data.should.have.property('email');
      response.status.should.equal(200);
      done();
    })
  })
})

describe('Testing untuk mendapatkan semua data user', () => {
  it('GET to /users should return spesific json', (done) => {
    axios.get('http://localhost:3000/users')
    .then((response) => {
      response.data.length.should.equal(3);
      response.data[0].name.should.equal('Asura Michi');
      response.data[0].should.have.property('username');
      response.status.should.equal(200);
      done();
    })
  })
})

describe('Testing untuk mendapatkan spesific data user', () => {
  it('GET to /users should return spesific json', (done) => {
    axios.get(`http://localhost:3000/users/59882ec4a5fe1c3ca44f7f62`)
    .then((response) => {
      console.log(response.data);
      response.data[0].name.should.equal('Akibara Mochi');
      response.status.should.equal(200);
      done();
    })
  })
})
