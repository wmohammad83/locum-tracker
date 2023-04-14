const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
const LocumDay = require('../models/locumdayModel')


// @desc    Get user locum days
// @route   GET /api/locumdays
// @access  Private
const getLocumdays = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const locumdays = await LocumDay.find({user: user.id})
    res.status(200).json(locumdays)
})

// @desc    Get user locum day
// @route   GET /api/locumdays/:id
// @access  Private
const getLocumday = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const locumday = await LocumDay.findById(req.params.id)

    if(!locumday){
        res.status(404)
        throw new Error('Locm day not found')
    }

    if(locumday.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    res.status(200).json(locumday)
})


// @desc    Create a locum day
// @route   POST /api/locumdays
// @access  Private
const createLocumday = asyncHandler(async (req, res) => {

    const {date, company, location, rate, miles} = req.body

    if(!date || !company || !location || !rate || !miles) {
        res.status(400)
        throw new Error('please add all fields')
    }

        // Get user using the id in the JWT
        const user = await User.findById(req.user.id)

        if(!user) {
            res.status(401)
            throw new Error('User not found')
        }

        const locumday = await LocumDay.create({
            date,
            company,
            location,
            rate,
            miles,
            user: req.user.id
        })

    res.status(201).json(locumday)
})

// @desc    Delete locum day
// @route   DELETE /api/locumdays/:id
// @access  Private
const deleteLocumday = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const locumday = await LocumDay.findById(req.params.id)

    if(!locumday){
        res.status(404)
        throw new Error('Locm day not found')
    }

    if(locumday.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    await locumday.remove()

    res.status(200).json({success: true})
})

// @desc    Update locum day
// @route   PUT /api/locumdays/:id
// @access  Private
const updateLocumday = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const locumday = await LocumDay.findById(req.params.id)

    if(!locumday){
        res.status(404)
        throw new Error('Locm day not found')
    }

    if(locumday.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }


    const updatedLocumday = await LocumDay.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedLocumday)
})

module.exports = {
    getLocumdays,
    getLocumday,
    createLocumday,
    deleteLocumday,
    updateLocumday
}