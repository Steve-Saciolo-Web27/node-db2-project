const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const inventoryRouter = require('../routes/inventory-router')

const server = express()
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/inventory', inventoryRouter)

server.get(`${process.env.API}`, (req, res) => {
  res.send(`We up on port ${process.env.PORT}`)
})

module.exports = server
