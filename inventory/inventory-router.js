const express = require('express')
require('dotenv').config()

const db = require('../inventory/inventory-model')

const router = express.Router()

//CREATE/ADD
router.post(`${process.env.API}`, validateVehicle, (req, res) => {
  db.insert(req.car)
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      res.status(500).json({ error: 'Something went wrong!' })
    })
})

// READ/GET
router.get(`${process.env.API}`, (req, res) => {
  db.get()
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to retrieve inventory!' })
    })
})

// READ/GET By ID
router.get(`${process.env.APID}`, validateById, (req, res) => {
  res.status(200).json(req.car)
})

// UPDATE/EDIT
router.put(`${process.env.APID}`, validateById, (req, res) => {
  const { id } = req.params
  const changes = req.body

  db.update(id, changes)
    .then(changes => {
      res.status(200).json(changes)
    })
    .catch(error => {
      res.status(500).json({ error: 'Something went wrong!' })
    })
})

// DELETE/REMOVE
router.delete(`${process.env.APID}`, validateById, (req, res) => {
  const { id } = req.params
  db.remove(id)
    .then(car => {
      res.status(200).json(req.car)
    })
    .catch(err => {
      res.status(500).json({ err: 'Error' })
    })
})

// Custom MiddleWare
function validateVehicle(req, res, next) {
  const car = req.body
  !car
    ? res.status(400).json({ error: 'No vehicle' })
    : !car.VIN || !car.Make || !car.Model || !car.Mileage
    ? res.status(400).json({ error: 'Missing one or more fields!' })
    : (req.car = car) & next()
}

function validateById(req, res, next) {
  const { id } = req.params
  db.getById(id)
    .then(cars =>
      cars
        ? (req.car = cars) & next()
        : res.status(401).json({ message: 'Invalid ID' })
    )
    .catch(err => res.status(500).json({ error: 'Invalid ID' }))
}
module.exports = router
