let should = require('chai').should()
let axios = require('axios')

describe('Testing for check routes', () => {
  it('GET to / should test availability index page', (done) => {
    axios.get('http://localhost:3000/')
    .then((response) => {
      done()
    })
  })
  
  it('GET to / should test availability article page', (done) => {
    axios.get('http://localhost:3000/articles')
    .then((response) => {
      done()
    })
  })
})
  
describe('Testing input new article', () => {
  it('POST to / should test article input', (done) => {
    axios.post('http://localhost:3000/articles', 
    {
      title: 'New JavaScript Article',
      author: 'John Doel',
      category: 'Programming',
      description: 'Learning JavaScript programming is fun and challenging.'
    })
    .then((response) => {
      // console.log(response);
      response.data.title.should.equal('New JavaScript Article')
      response.data.author.should.equal('John Doel')
      response.data.category.should.equal('Programming')
      response.data.should.have.property('author')
      response.data.should.have.property('description')
      done()
    })
  })
})

describe('Testing for get article information', () => {
  it('GET to / should test article list information', (done) => {
    axios.get('http://localhost:3000/articles')
    .then((response) => {
      // console.log('ini hasil response',response.data[0]);
      response.data[0].author.should.equal('John Doel');
      response.data[0].should.have.property('category');
      done()
    })
  })
})

describe('Testing find article endpoint', () => {
  it('GET to /articles/:id should return specific article depend on id', (done) => {
    let id = '598849d45c27d7754677a457'
    axios.get('http://localhost:3000/articles/' + id)
    .then(response => {
      response.data._id.should.equal(id)
      done()
    })
  })
})

describe('Testing to Update article information', () => {
  it('PUT to / should test update article', (done) => {
    let id = '59887812ee9c17053cedb71b'
    axios.put('http://localhost:3000/articles/598846f0d2a52e71aa424694', 
    {
      title: 'Node JavaScript Article',
      author: 'John Doe',
      category: 'Programming',
      description: 'Learning JavaScript programming is fun and challenging.'
    })
    .then(response => {
      response.data.nModified.should.equal(1)
      done()
    })
  })
})


describe('Delete article based on id endpoint', () => {
  it('DELETE /articles/:id should destroy specific article depend on id', (done) => {
    let id = '59887c10a1ed0b08702f5e26'
    axios.delete('http://localhost:3000/articles/', + id)
    .then(response => {
      response.data.ok.should.equal(1)
      done()
    })
  })
})

// describe('Delete all articles', () => {
//   it('DELETE / should destroy all articles', done => {
//     axios.delete('http://localhost:3000/articles')
//     .then(response => {
//       response.data.ok.should.equal(15)
//       done()
//     })
//   })
// })
