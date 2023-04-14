const express = require('express')
const router = express.Router()
const {getLocumdays, getLocumday ,createLocumday, deleteLocumday, updateLocumday} = require('../controllers/locumdayController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getLocumdays)
router.post('/', protect, createLocumday)
router.get('/:id', protect, getLocumday)
router.delete('/:id', protect, deleteLocumday)
router.put('/:id', protect, updateLocumday)


module.exports = router