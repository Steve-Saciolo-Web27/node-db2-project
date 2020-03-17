const express = require('express')
require('dotenv').config()

const db = require('../data/db-config')

const router = express.Router()

//CREATE/ADD
router.post(`${process.env.API}`, (req, res) => {
  db('inventory')
    .insert(req.body, 'id')
    .then(car => {
      res.status(201).json(car)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ error: 'Failed to add car to invetory!' })
    })
})

// READ/GET
router.get(`${process.env.API}`, (req, res) => {
  db('inventory')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to retrieve inventory!' })
    })
})

module.exports = router
