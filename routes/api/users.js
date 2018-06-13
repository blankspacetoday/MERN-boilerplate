const express = require('express')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const keys = require('../../config/keys')

const router = express.Router()

router.get('/test', (req, res)=> res.json({msg: "user test"}))

module.exports = router
