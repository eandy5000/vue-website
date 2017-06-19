const express = require('express')
const app = express()
const Path = require('path')
const fs = require('fs')

app.set('port', (process.env.PORT || 5000))
const template = fs.readFileSync(Path.resolve('dist', 'index.html'), 'utf-8')

app.use(express.static(Path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send(template)
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port: ${app.get('port')}`)
})
