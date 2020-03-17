const express = require('express')
require('dotenv').config()

const server = express()
server.use(express.json())

server.get(`${process.env.API}`, (req, res) => {
  res.send(`We up on ${process.env.PORT}`)
})

module.exports = server
