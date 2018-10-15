const fs = require('fs')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  const path = './slides'
  const filenames = fs.readdirSync(path)

  const slides = filenames.map((filename, index) => {
    const slide = fs.readFileSync(`${path}/${filename}`, 'utf-8')
    return slide.replace('{{xpos}}', index * 2000)
  })

  res.render('./index', { slides })
})

app.listen(8000)
