const chai = require('chai');
const should = chai.should();
const axios = require('axios');

describe('Testing untuk cek koneksi ke databasee', function(){
  it('Get to /articles, and should return status OK', function(){
    return axios.get('http://localhost:3000/articles')
    .then(response => {
      response.status.should.equal(200)
    })
  })
})

describe('Testing untuk post article baru', function(){
  it('Post to /articles, data to DB return log data', function(){
    return  axios.post('http://localhost:3000/articles',{
      title: 'Ketika Johndoe Berubah Menjadi Foobar',
      author: 'AhmadJX',
      article_content: 'Berlama-lama di depan layar monitor seperti komputer, laptop, notebook dan sebagainya membuat mata akan merasa mudah lelah, dan jika hal tersebut dibiasakan dan tidak segera diatasi, maka hal ini akan menjadi pemicu rusaknya mata anda. untuk mengatasinya, anda dapat mengurangi intensitas cahaya dari monitor sehingga tidak begitu terang dan tidak mudah merusak mata anda.',
    })
    .then(response => {
      response.data.title.should.equal('Ketika Johndoe Berubah Menjadi Foobar')
    })
  })
})

describe('Testing untuk mendapatkan semua data articles', () => {
  it('GET to /articles should return spesific json', (done) => {
    axios.get('http://localhost:3000/articles')
    .then((response) => {
      response.data[0].title.should.equal('Lorem Ipsum');
      response.data[0].should.have.property('title');
      response.status.should.equal(200);
      done();
    })
  })
})

describe('Testing untuk mendapatkan spesifik data articles', function(){
  it('Get to /articles/:id should return a object', function(){
    return axios.get('http://localhost:3000/articles/59895d5e34ae69371c0d46cd')
    .then(response => {
      response.status.should.equal(200)
      response.data.should.be.a('object')
    })
  })
})

describe('Testing untuk update spesifik data articles', function(){
  it('Put to /articles/:id, should return status ok', function(){
    return axios.put('http://localhost:3000/articles/599324af0d90ef1cd1ad2c76',{
      title: 'Johndoe Become Foobar'
    })
    .then(response => {
      response.status.should.equal(200)
    })
  })
})

describe('Testing untuk delete spesifik data articles', function(){
  it('delete to /articles/:id, should return status ok', function(){
    return axios.delete('http://localhost:3000/articles/599320380d90ef1cd1ad2c73')
    .then(response => {
      response.status.should.equal(200)
    })
  })
})
