const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World, Bui Ngoc Tien xin chao...')
})

app.get('/about', (req, res) => {
    res.send('Co gang lam viec nhe')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
