const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('Index GET route hit')
  next()
})

router.post('/', (req, res, next) => {
  res.send('Index POST route hit')
  next()
})
module.exports = router