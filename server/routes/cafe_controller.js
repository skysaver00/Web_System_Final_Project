const Cafe = require('../model/cafe_model')

const express = require('express')
const router = express.Router();

const createSeat = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a seat',
        })
    }

    const cafe = new Cafe(body)

    if (!cafe) {
        return res.status(400).json({ success: false})
    }

    cafe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: cafe._id,
                message: 'Seat created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Seat not created!',
            })
        })
}

const updateSeat = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No const body to update',
        })
    }

    Cafe.findOne({ _id: req.params.id }, (err, seat) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seat not found!',
            })
        }
        seat.name = body.name
        seat.time = body.time
        seat.password = body.password
        seat.seatNumber = body.seatNumber
        seat
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: seat._id,
                    message: 'Seat updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Seat not updated!',
                })
            })
    })
}

const deleteSeat = async (req, res) => {
    await Cafe.findOneAndDelete({ _id: req.params.id }, (err, seat) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (seat) {
            return res
                .status(404)
                .json({ success: false, error: `Seat not found` })
        }

        return res.status(200).json({ success: true, data: seat })
    }).catch(err => console.log(err))
}

const getSeatById = async (req, res) => {
    await Cafe.findOne({ _id: req.params.id }, (err, seat) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seat) {
            return res
                .status(404)
                .json({ success: false, error: `Seat not found` })
        }
        return res.status(200).json({ success: true, data: seat })
    }).catch(err => console.log(err))
}

const getSeats = async (req, res) => {
    await Cafe.find({}, (err, seats) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!seats.length) {
            return res
                .status(404)
                .json({ success: false, error: `Seat not found` })
        }
        return res.status(200).json({ success: true, data: seats })
    }).catch(err => console.log(err))
}

module.exports = {
    createSeat,
    updateSeat,
    deleteSeat,
    getSeats,
    getSeatById,
}