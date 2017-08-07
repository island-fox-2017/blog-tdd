let should = require('chai').should()
let axios = require('axios')

describe('Testing for article', () => {
  it('GET to /articles should test availability article routes', (done) => {
    axios.get('http://localhost:3000/articles')
    .then((response) => {
      response.data[0].title.should('test')
      done()
    })
  })
})
