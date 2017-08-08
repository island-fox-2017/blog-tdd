
var axios = require('axios')
var url = `http://localhost:3000/`

var Article = require('../server/models/article')

let articles = [
  {
    author: 'fajar',
    title: '5 cara hidup sehat',
    content: 'ini adalah salah satu contoh konten'
  },{
    author: 'dzaki',
    title: 'ekonomi syariah',
    content: 'kontent syariah'
  },{
    author: 'rifma',
    title: 'psikologi sehat',
    content: 'cara menuju psikologi sehat'
  }
]
Article.insertMany(articles, (err, created) => {
  err ? console.log(err) : console.log(created)
})

// .then(articles => {
//   res.send(articles)
//   done()
// })
// .catch(err => {
//   res.status(500).send(err)
//   done()
// })

// Article.find({}, (err, found) => {
//   err ? console.log(err) : console.log(found);
// })
