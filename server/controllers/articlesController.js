
var Article = require('../models/article')


var getAll = (req, res) => {
  Article.find({})
  .then(articles => {
    res.send(articles)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOne = (req, res) => {
  res.send('getOne')
}

var create = (req, res) => {
  res.send('create')
}

var seed = (req, res) => {
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
  Article.insertMany(articles)
  .then(created => {
    res.send(created)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var removeAll = (req, res) => {
  console.log(`------------ masuk clear`);
  Article.remove({})
  .then(removed => {
    console.log(`--------------`);
    res.send(removed)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  res.send('remove')
}

var update = (req, res) => {
  res.send('update')
}

module.exports = {
  getAll, getOne, create, seed, remove, update, removeAll
}
