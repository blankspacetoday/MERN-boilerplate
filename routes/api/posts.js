const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const keys = require('../../config/keys')

router.get('/test', (req, res)=> res.json({msg: "posts test"}))

module.exports = router
