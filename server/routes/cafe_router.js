const express = require('express')

const SeatControl = require('./cafe_controller')

const router = express.Router()

router.post('/cafe', SeatControl.createSeat)
router.put('/cafe/:id', SeatControl.updateSeat)
router.delete('/cafe/:id', SeatControl.deleteSeat)
router.get('/cafe/:id', SeatControl.getSeatById)
router.get('/cafes', SeatControl.getSeats)

module.exports = router