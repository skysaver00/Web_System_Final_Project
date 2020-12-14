const express = require('express')

const database = require('./database')

const bodyParser = require('body-parser')
const cors = require('cors')

const cafeRouter = require('./routes/cafe_router')
const app = express()
const port = 3080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', cafeRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))