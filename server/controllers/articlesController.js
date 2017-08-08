
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
  let article = new Article({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content
  })
  article.save()
  .then(created => {
    res.send(created)
  })
  .catch(err => [
    res.status(500).send(err)
  ])
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
  Article.remove({})
  .then(removed => {
    res.send(removed)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  Article.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.send(removed)
  })
  .catch(err => [
    res.status(500).send(err)
  ])
}

var update = (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  seed,
  remove,
  update,
  removeAll
}
