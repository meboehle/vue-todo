const mongoose = require('mongoose')
require('dotenv').config({ path: __dirname + '/./../.env'})
const dbUrl = process.env.URL

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection

db.on('error', () => console.log('> error occurred from the database'))

db.once('open', () => console.log('> successfully connected to the database'))

module.exports = mongoose