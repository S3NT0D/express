const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

router.get('/students', studentController.index)

router.get('/student/id/:id', studentController.getById)

router.post('/student', studentController.store)

router.put('/student/id/:id', studentController.updateById)

router.delete('/student/id/:id', studentController.deleteById)

module.exports = router