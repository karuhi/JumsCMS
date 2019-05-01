const express = require('express')
const bodyParser = require('body-parser')
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', function(req, res) {
  res.send({
    posts: [{title:"titletitle",text:"texttext",tag:"tagtag",date:"datedate",auther:"autherauther"}]
  })
})

app.listen(process.env.PORT || 3000)