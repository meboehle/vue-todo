const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes')
const app = express()
const port = 8000

const corsOptions = {
  origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/v1', api)

app.listen(port, () => console.log('server running on port', port))