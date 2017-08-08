
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
  Article.findById(req.params.id)
  .then(found => {
    res.send(found)
  })
  .catch(err => {
    res.status(500).send(err)
  })
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
      content: `Udara bersih, paru-paru pun sehat
Hiruplah udara yang bersih dan sehat, maka Anda terhindar dari gangguan pernapasan. Udara pagi adalah sangat baik untuk paru-paru Anda, tanpa repot mencari udara pegunungan. Sempatkanlah diri keluar rumah sebelum berangkat beraktifitas untuk mengatur pernapasan menghirup udara sejuk. Ketika berada di luar, sebisa mungkin menjauhlah dari udara tercemar seperti asap kendaraan atau debu dan asap rokok. Perabot rumah, kipas angin atau AC di rumah dan ruangan kerja Anda juga jangan lupa untuk rutin dibersihkan.
Banyak minum air putih

Dibanding minuman apapun, air putih lah yang terbaik. Seperti anjuran pada umumnya, per hari minimal minumlah air putih 8-9 gelas. Fungsi ginjal dan saluran kemih pun terbantu kelancarannya dengan meminum air putih. Di siang hari, minumlah air sejuk (bukan air es) dan air hangat di malam hari. Anda juga bisa menambahkan air jeruk lemon atau jeruk nipis. Minuman ini berguna mengeluarkan toksin dari dalam tubuh, selain menyegarkan diri.`
    },{
      author: 'dzaki',
      title: 'ekonomi syariah',
      content: `Krisis ekonomi yang sering terjadi ditengarai adalah ulah sistem ekonomi konvensional, yang mengedepankan sistem bunga sebagai instrumen profitnya. Berbeda dengan apa yang ditawarkan sistem ekonomi syariah, dengan instrumen profitnya, yaitu sistem bagi hasil.

Sistem ekonomi syariah sangat berbeda dengan ekonomi kapitalis, sosialis maupun komunis. Ekonomi syariah bukan pula berada di tengah-tengah ketiga sistem ekonomi itu. Sangat bertolak belakang dengan kapitalis yang lebih bersifat individual, sosialis yang memberikan hampir semua tanggung jawab kepada warganya serta komunis yang ekstrim[1], ekonomi Islam menetapkan bentuk perdagangan serta perkhidmatan yang boleh dan tidak boleh di transaksikan[4]. Ekonomi dalam Islam harus mampu memberikan kesejahteraan bagi seluruh masyarakat, memberikan rasa adil, kebersamaan dan kekeluargaan serta mampu memberikan kesempatan seluas-luasnya kepada setiap pelaku usaha.`
    },{
      author: 'rifma',
      title: 'psikologi sehat',
      content: `Pengalaman awal merupakan segenap pengalaman-pengalaman yang terjadi pada individu terutama yang terjadi di masa lalunya. Pengalaman awal ini adalah merupakan bagian penting dan bahkan sangat menentukan bagi kondisi mental individu di kemudian hari.Kebutuhan Pemenuhan kebutuhan dapat meningkatkan kesehatan mental seseorang. Orang yang telah mencapai kebutuhan aktualisasi yaitu orang yang mengeksploitasi dan segenap kemampuan bakat, ketrampilannya sepenuhnya, akan mencapai tingkatan apa yang disebut dengan tingkatan pengalaman puncak.Dalam berbagai penelitian ditemukan bahwa orang-orang yang mengalami gangguan mental, disebabkan oleh ketidakmampuan individu memenuhi kebutuhan-kebutuhannya. Kebutuhan yang dimaksud di sini adalah kebutuhan dasar yang tersusun secara hirarki. Kebutuhan biologis, kebutuhan rasa aman, meliputi kebutuhan dicintai, kebutuhan harga diri, pengetahuan, keindahan dan kebutuhan aktualisasi diri.

Read more: http://doktersehat.com/psikologi-kesehatan-mental/#ixzz4p9yMkXSo`
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
